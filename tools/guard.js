#!/usr/bin/env node
/**
 * 周更门禁：market-reports 发布前强制校验
 *
 * 背景（两次真实事故）：
 *  1) 2026-10-08 改版漏写一个 </div> → tab-archive 被嵌套进 tab-policy，语法校验完全通过，
 *     但两个 tab 互相污染。语法检查对 HTML 嵌套错误无效，必须单独做深度/兄弟关系校验。
 *  2) 2026-11-07 发现 qwen.html 内联的明文 API Key 随文件提交进 PUBLIC 公开仓库，
 *     页面源码公开可取 → 被人取走盗刷，阿里云账户欠费（Arrearage）。
 *
 * 用法：node tools/guard.js            （退出码 0 = 通过，1 = 有阻断项）
 * 自动化必须在本脚本通过后才允许 git push。
 */
const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const F = (n) => path.join(ROOT, n);
const KEY_RE = /sk-[A-Za-z0-9._-]{20,}/g;

let fatal = 0, warn = 0;
const say = (ok, msg, hard) => {
  if (ok) { console.log('  ✓ ' + msg); return; }
  if (hard) { console.log('  ✗ [阻断] ' + msg); fatal++; }
  else { console.log('  ! [提醒] ' + msg); warn++; }
};

function read(f) { try { return fs.readFileSync(F(f), 'utf8'); } catch (e) { return null; } }
function matchClose(src, start) {
  let d = 0; const re = /<div\b[^>]*>|<\/div>/g; re.lastIndex = start; let m;
  while ((m = re.exec(src))) { if (m[0][1] === '/') { d--; if (d === 0) return m.index; } else d++; }
  return -1;
}
function evalArray(src, name) {
  const st = src.indexOf('const ' + name + ' = [');
  if (st < 0) return null;
  let i = src.indexOf('[', st), d = 0, q = false, e2 = false, end = -1;
  for (; i < src.length; i++) {
    const c = src[i];
    if (q) { if (e2) e2 = false; else if (c === '\\') e2 = true; else if (c === '"' || c === "'" || c === '`') q = false; continue; }
    if (c === '"' || c === "'" || c === '`') { q = true; continue; }
    if (c === '[') d++; else if (c === ']') { d--; if (d === 0) { end = i + 1; break; } }
  }
  if (end < 0) return null;
  return new Function('return ' + src.slice(src.indexOf('[', st), end))();
}

// ── 1. 语法 ──
console.log('\n[1] JS 语法');
const idx = read('index.html') || '';
const scripts = [...idx.matchAll(/<script>([\s\S]*?)<\/script>/g)].map(m => m[1]);
const main = scripts.find(s => s.includes('const weekOptions'));
say(!!main, 'index.html 内联脚本可编译');
if (main) { try { new Function(main); say(true, 'index.html 语法 OK'); } catch (e) { say(false, 'index.html 语法错误: ' + e.message, true); } }
const qwen = read('qwen.html') || '';
const qsc = [...qwen.matchAll(/<script>([\s\S]*?)<\/script>/g)].map(m => m[1]);
if (qsc.length) { try { new Function(qsc[qsc.length - 1]); say(true, 'qwen.html 语法 OK'); } catch (e) { say(false, 'qwen.html 语法错误: ' + e.message, true); } }

// ── 2. HTML 嵌套 / tab 兄弟关系（语法检查查不出来的部分）──
console.log('\n[2] HTML 嵌套与 tab 兄弟关系');
const ids = ['tab-overview', 'tab-bids', 'tab-vendor', 'tab-policy', 'tab-archive', 'tab-radar', 'tab-unverified'];
const rs = ids.map(id => { const p = idx.indexOf('id="' + id + '"'); const o = idx.lastIndexOf('<div', p); return { id, o, c: o >= 0 ? matchClose(idx, o) : -1 }; });
rs.forEach((r, i) => {
  if (r.o < 0) { say(false, r.id + ' 未找到', true); return; }
  const sib = i === 0 || r.o > rs[i - 1].c;
  say(r.c > 0 && sib, r.id + (r.c > 0 ? ' 闭合正常' : ' 无匹配闭合') + (sib ? '' : ' ← 被嵌套进上一个 tab！'));
});

// ── 3. 数据完整性 ──
console.log('\n[3] 数据完整性');
const cur = evalArray(idx, 'currentWeekBids');
const arc = evalArray(idx, 'archiveData');
say(!!cur && Array.isArray(cur), 'currentWeekBids 可解析');
say(!!arc && Array.isArray(arc), 'archiveData 可解析');
if (cur && arc) {
  say(Array.isArray(arc[0]), 'archiveData 每个元素均为子数组（结转未扁平化）', true);
  say(cur.length > 0, 'currentWeekBids 非空（本期 ' + cur.length + ' 条）');
  const bad = cur.filter(r => !r.bidder || !r.winner || !r.project || !r.date || !r.source);
  say(bad.length === 0, '本期记录必填字段齐全' + (bad.length ? '（缺 ' + bad.length + ' 条）' : ''), true);
  const dup = {};
  cur.forEach(r => { const k = [r.bidder, r.winner, r.project, r.date].join('|'); dup[k] = (dup[k] || 0) + 1; });
  const dups = Object.values(dup).filter(v => v > 1).length;
  say(dups === 0, '本期无重复记录' + (dups ? '（' + dups + ' 组重复）' : ''), true);
}

// ── 4. 来源健康度 ──
console.log('\n[4] 来源健康度');
say(!idx.includes('column=undefined'), '无 column=undefined 坏链（金采网无效深链）', true);
if (cur) {
  const linked = cur.filter(r => r.sourceUrl).length;
  const pct = Math.round(linked / cur.length * 100);
  console.log(`  · 本期来源：可点原文 ${linked}/${cur.length}（${pct}%），仅平台署名 ${cur.length - linked} 条`);
  if (pct < 40) say(false, '本期可点原文比例低于 40%，请补来源链接', false);
}

// ── 5. 安全红线：公开文件里绝不能有明文 Key ──
console.log('\n[5] 安全红线（明文 Key）');
['index.html', 'qwen.html', 'qwen-data.js', 'chart.umd.js', 'README.md'].forEach(f => {
  const t = read(f);
  if (!t) return;
  const hits = t.match(KEY_RE);
  say(!hits, f + (hits ? ' 含 ' + hits.length + ' 处明文 Key！' : ' 无明文 Key'), true);
});

// ── 6. 证据等级标注一致性（2026-11-09）──
console.log('\n[6] 证据等级标注一致性');
const allBids = (() => {
  try {
    const cur = evalArray(idx, 'currentWeekBids') || [];
    const arc = evalArray(idx, 'archiveData') || [];
    return [...cur, ...arc.flat()];
  } catch (e) { return []; }
})();
if (allBids.length) {
  const noSource = allBids.filter(r => !r.source && !r.sourceUrl);
  const marked = allBids.filter(r => r.v === 'none');
  say(marked.length === noSource.length,
    '无来源记录均已标记 v:none（标记 ' + marked.length + ' / 实际 ' + noSource.length + '）', true);
  const badV = allBids.filter(r => r.v && !['full', 'platform', 'summary', 'none'].includes(r.v));
  say(badV.length === 0, 'v 字段取值合法（full/platform/summary/none）' + (badV.length ? '，异常 ' + badV.length + ' 条' : ''), true);
  // 隔离生效：主表只允许出现 full（宁缺毋滥），其余全部沉入线索池
  const crSrc = (idx.match(/function computeRows\(\)\{[\s\S]*?\n\}/) || [''])[0];
  say(/evidenceLevel\(r\)==='full'/.test(crSrc), '主表 computeRows 只保留 full（宁缺毋滥：不混排未核验记录）', true);
  const radarSrc = (idx.match(/const pool = allPool\.filter\([^\n]*\)/) || [''])[0];
  say(/sourceUrl/.test(radarSrc), '招采动态(radar)只渲染有可点原文的条目', true);
  say(/id="tab-unverified"/.test(idx) && /线索池/.test(idx), '线索池 Tab 存在且已改名');
  // 只匹配 source 字段「值」里含 404/失效 的自述失效条目；URL 里偶然含 404 字样不算
  say(!/source:'[^']*(404|失效|打不开|已下线)[^']*'/.test(idx), '无自述"深链已404/失效"的条目残留');
  // 四档渲染函数在位
  say(/function evidenceLevel\(r\)/.test(idx), 'evidenceLevel() 存在');
  say(/EVIDENCE_META/.test(idx), 'EVIDENCE_META 四档定义存在');
}

console.log('\n' + '='.repeat(60));
if (fatal) { console.log(`❌ 门禁未通过：${fatal} 项阻断（禁止 push）${warn ? '，' + warn + ' 项提醒' : ''}`); process.exit(1); }
console.log('✅ 门禁通过' + (warn ? `（${warn} 项提醒）` : '') + '，可以 push');
