const fs = require('fs');
const p = 'C:/Users/49370/WorkBuddy/2026-07-06-11-22-27/market-reports/index.html';
let html = fs.readFileSync(p, 'utf8');

/* ---------- 1. currentWeekBids (09.14–09.20) ---------- */
const NEW_CWB = `  // ===== 09.14–09.20 本周新增（全部已核验来源）=====
  // --- 凯美瑞德（KMRD）持续重点跟踪：券商 / 政策性银行 / 股份行 ---
  {bidder:'国泰海通证券（券商）',winner:'凯美瑞德(苏州)信息科技股份有限公司',project:'2026年全资产系统开发建设采购项目（公示）',amount:'金额未披露',date:'2026-09-16',source:'国泰海通证券采购平台',sourceUrl:'https://supplier.gtht.com/#/procurnotice?type=&id=73729fee252a4ed4b46f20aa914c27b5'},
  // --- 政策性银行（最高优先级）---
  {bidder:'中国进出口银行（政策性银行）',winner:'建信金融科技有限责任公司',project:'2026年联合开发23个系统信息技术应用创新改造项目（信创，单一来源成交）',amount:'5596万元',date:'2026-09-14',source:'中国进出口银行官网',sourceUrl:''},
  // --- 国有大型商业银行（最高优先级）---
  {bidder:'中国农业银行吉林省分行（国有大行）',winner:'北京中科江南信息技术股份有限公司',project:'国库集中支付系统信创改造及国产密码适配改造项目（信创，单一来源）',amount:'金额未披露',date:'2026-09-14',source:'中国农业银行官网',sourceUrl:'https://www.abchina.com.cn/zt/branch/jl/CG/JG/202609/t20260914_2675146.htm'},
  {bidder:'建信基金管理有限责任公司（建设银行子公司）',winner:'恒生电子股份有限公司',project:'"龙钱宝2号"功能适配建行进行升级改造项目（单一来源采前公示）',amount:'金额未披露',date:'2026-09-14',source:'建信基金采购平台',sourceUrl:''},
  // --- 股份制商业银行（最高优先级）---
  {bidder:'兴业银行股份有限公司（股份制商业银行）',winner:'（中标候选人公示，待公示中标人）',project:'零贷信贷工厂架构重构配套改造项目研发实施服务（中标候选人公示）',amount:'金额未披露',date:'2026-09-18',source:'方圆招标',sourceUrl:'https://www.fycbid.com/#/notice/detail-upgrade?bidId=2092416993691234306&bulletinId=2100882497528725506'},
  {bidder:'中国光大银行（股份制商业银行）',winner:'深圳微众信用科技股份有限公司',project:'外部数据管理平台外部数据接入与运营之银税数据接入子系统项目（第二次，中标候选人公示）',amount:'金额未披露',date:'2026-09-18',source:'诚招招标/光大银行官网',sourceUrl:'https://www.chengezhao.com/cms/post/4/0/4003b5b8ca755353055cf7ff6864d745/'},
  {bidder:'中国光大银行（股份制商业银行）',winner:'江苏微盛网络科技有限公司',project:'公司业务管理系统-对公客户企微服务管理子系统新建项目（二次招标，中标候选人公示）',amount:'金额未披露',date:'2026-09-18',source:'光大银行官网',sourceUrl:''},
  // --- 城市商业银行（最高优先级）---
  {bidder:'辽沈银行（城市商业银行）',winner:'恒生电子股份有限公司',project:'供应链系统建设项目（第二次）中标候选人公示',amount:'金额未披露',date:'2026-09-15',source:'辽沈银行采购平台',sourceUrl:''},
  {bidder:'乐山市商业银行（城市商业银行）',winner:'信雅达科技股份有限公司',project:'消费者权益保护系统优化信创改造项目（信创，中标结果公告）',amount:'31万元',date:'2026-09-15',source:'证券之星/天眼查',sourceUrl:'https://stock.stockstar.com/RB2026091800016907.shtml'},
  {bidder:'龙江银行（城市商业银行）',winner:'北京科蓝软件系统股份有限公司',project:'新一代核心系统建设项目-第三方清算系统配合改造人力外包服务采购项目（结果公告）',amount:'120.8万元',date:'2026-09-16',source:'证券之星/天眼查',sourceUrl:'https://stock.stockstar.com/RB2026091800017887.shtml'},
  {bidder:'宁波银行（城市商业银行）',winner:'宁波亿红/百硕同兴/上海致一 等（GoldenDB、OceanBase、东方通/宝兰德/中创中间件、UOS、麒麟OS 等）',project:'2026年基础软件正版化采购项目（国产数据库/中间件/操作系统替换，信创）',amount:'金额未披露',date:'2026-09-16',source:'宁波市阳光采购服务平台',sourceUrl:'https://ygcg.nbcqjy.org/detail?bulletinId=9768e56c-1532-4fbb-8900-101aa25bc2b5'},
  // --- 理财子公司（银行系）---
  {bidder:'渤银理财有限责任公司（渤海银行理财子公司）',winner:'恒生电子股份有限公司',project:'投资交易系统续建需求建设项目（2026年第1批次）成交公示',amount:'金额未披露',date:'2026-09-15',source:'渤银理财采购平台',sourceUrl:'https://www.sohu.com/a/1077776195_121319643'},
  {bidder:'光大理财有限责任公司（光大银行理财子公司）',winner:'恒生电子股份有限公司',project:'销售端资金清算系统深分T05接口改造及划款自动化项目采购项目中标结果公告',amount:'129.8万元',date:'2026-09-15',source:'东方财富/同壁财经',sourceUrl:'https://guba.eastmoney.com/news,cfhpl,1773146711,1633085009864904,z.html'},
  // --- 央行分支机构（信创软件）---
  {bidder:'中国人民银行广东省分行（央行分支机构）',winner:'安图特(北京)科技有限公司',project:'基础软件采购项目（二次）（东方通TongWeb + 电科金仓KingbaseES 国产数据库/中间件替换，信创）',amount:'33万元',date:'2026-09-16',source:'中国政府采购网',sourceUrl:'https://www.ccgp.gov.cn/cggg/zygg//zbgg/202609/t20260916_27341407.htm'},
  // --- 恒生电子 ---
  {bidder:'国信证券资产管理有限公司（券商资管）',winner:'恒生电子股份有限公司',project:'交易所改造与赎回至指定金额等模块采购项目（候选人公示）',amount:'102.3万元',date:'2026-09-18',source:'深圳交易集团',sourceUrl:'https://ygcg.szexgrp.com/jyxxDetails.htm?bidSectionNumber=YG26QD0050814-01&contentId=20648193&code=hxrgs'},
  {bidder:'西南证券股份有限公司（券商）',winner:'恒生电子股份有限公司',project:'集中交易系统信创改造项目（第二次）拟中标结果公示（信创）',amount:'193.761万元',date:'2026-09-18',source:'重庆招标采购/西南证券',sourceUrl:'https://www.cqzbw.com/cms/default/webfile/tender-zbjggg/20260918/1285665272803360768.html'},
  {bidder:'西南证券股份有限公司（券商）',winner:'恒生电子股份有限公司',project:'深市RTGS优化系列系统改造项目（机构柜台交易系统）采购结果公示',amount:'239万元',date:'2026-09-18',source:'西南证券采购平台',sourceUrl:'https://cpms.swsc.com.cn:8090/cms/cmsjieguogg/57b01f3a88a6402da8ec06d706cb1ce5.html'},
  {bidder:'财通证券股份有限公司（券商）',winner:'恒生电子股份有限公司',project:'深市RTGS优化和中登协助执法优化项目-恒生部分采购结果更正公告',amount:'金额未披露',date:'2026-09-18',source:'乐采云',sourceUrl:''},
  {bidder:'浙商证券股份有限公司（券商）',winner:'恒生电子股份有限公司',project:'2026年第二季度恒生软件产品及技术服务集中采购项目（货物）成交候选人公示',amount:'金额未披露',date:'2026-09-18',source:'浙商证券官网',sourceUrl:'https://www.stocke.com.cn/main/a/20260918/8357123.shtml'},
  {bidder:'国开证券股份有限公司（券商）',winner:'恒生电子股份有限公司',project:'反洗钱、异常交易、隔离墙系统维护服务项目（2年期）成交结果公告',amount:'96万元',date:'2026-09-17',source:'金采网',sourceUrl:'http://www.cfcpn.com/jcw/sys/index/goUrl?url=modules/sys/login/detail&column=undefined&searchVal=47b1719cf26f486b8a9e2054280d9ef'},
  {bidder:'中加基金管理有限公司（基金）',winner:'恒生电子股份有限公司',project:'公募销售服务费率改革系统采购项目成交结果公告',amount:'278万元',date:'2026-09-17',source:'中化招标/中加基金',sourceUrl:'https://ebid.sinochemitc.com/web-portal/#/trade-info-detail?id=1550197741931995136&noticeType=4'},
  {bidder:'兴业证券股份有限公司上海证券自营分公司（券商）',winner:'恒生电子股份有限公司',project:'AST极速交易系统信创改造项目采购结果公示（信创）',amount:'金额未披露',date:'2026-09-15',source:'兴业证券官网',sourceUrl:''},
  {bidder:'国信证券股份有限公司（券商）',winner:'恒生电子股份有限公司',project:'自营O32等8套系统共29个模块采购项目候选人公示',amount:'金额未披露',date:'2026-09-15',source:'深圳交易集团',sourceUrl:''},
  // --- 金仕达 ---
  {bidder:'国新证券股份有限公司（券商）',winner:'上海金仕达软件科技股份有限公司',project:'从业人员投资申报及信息隔离墙信创版本与升级模块项目采购结果公告（信创）',amount:'74万元',date:'2026-09-16',source:'金采网',sourceUrl:'http://www.cfcpn.com/jcw/sys/index/goUrl?url=modules/sys/login/detail&column=undefined&searchVal=779d3cfa9fff41f6a066a3ed46a04b9'},
  {bidder:'甬兴证券有限公司（券商）',winner:'上海金仕达软件科技股份有限公司',project:'反洗钱系统信创改造采购中标公示（信创）',amount:'金额未披露',date:'2026-09-16',source:'宁波市阳光采购服务平台',sourceUrl:'https://ygcg.nbcqjy.org/detail?bulletinId=2887aa70-e8a3-4eb0-95f9-77c4a4a61be0'},
  {bidder:'财信期货有限公司（期货）',winner:'上海金仕达软件科技股份有限公司',project:'金仕达新一代期货风险监控软件信创改造采购项目单一来源公示（信创）',amount:'金额未披露',date:'2026-09-14',source:'财信期货采购平台',sourceUrl:''},
  {bidder:'中证指数有限公司（指数机构）',winner:'上海金仕达软件科技股份有限公司',project:'2026-2027年度业务数据维护系统（二期）项目中标候选人公示',amount:'金额未披露',date:'2026-09-15',source:'诚招招标',sourceUrl:'https://www.chengezhao.com/cms/post/f/6/f6b118d44f7131af36ab003e6cd574bc/'},
  {bidder:'浙商证券股份有限公司（券商）',winner:'上海金仕达软件科技股份有限公司（等12家）',project:'2026年度维护费集中采购项目（第一批次）重新采购直接采购项目成交结果公告',amount:'金额未披露',date:'2026-09-16',source:'浙商证券官网',sourceUrl:'https://www.stocke.com.cn/main/a/20260916/8355303.shtml'},
  // --- 衡泰技术 ---
  {bidder:'华安证券股份有限公司（券商）',winner:'杭州衡泰技术股份有限公司',project:'信用风险管理系统信创改造项目中标候选人公示（信创）',amount:'金额未披露',date:'2026-09-16',source:'华安证券官网',sourceUrl:'https://www.hazq.com/main/a/20260916/19470.shtml'},
  {bidder:'中证指数有限公司（指数机构）',winner:'杭州衡泰技术股份有限公司',project:'2026-2027年度业务数据维护系统（二期）项目中标候选人公示',amount:'金额未披露',date:'2026-09-15',source:'诚招招标',sourceUrl:'https://www.chengezhao.com/cms/post/f/6/f6b118d44f7131af36ab003e6cd574bc/'},
  // --- 兆尹信息 ---
  {bidder:'华泰证券股份有限公司（券商）',winner:'安徽兆尹信息科技股份有限公司',project:'托管数据服务平台软件模块项目中标结果公示',amount:'255万元',date:'2026-09-14',source:'中国招标投标公共服务平台',sourceUrl:'https://ctbpsp.com/#/bulletinDetail?uuid=e88b8976-f427-4dc4-9ea7-8536a5a44373&cid=14'},
  {bidder:'中信信托有限责任公司（信托）',winner:'安徽兆尹信息科技股份有限公司',project:'职业年金受托运营管理系统2026年整体建设项目二次招标-中标候选人公示',amount:'金额未披露',date:'2026-09-14',source:'中国招标投标公共服务平台',sourceUrl:'https://ctbpsp.com/#/bulletinDetail?uuid=5002c349-29fd-4945-8387-9ae22564cdaa&cid=14'},
`;

/* ---------- 2. archiveData = [ old currentWeekBids , old archiveData ] ---------- */
const cwbMatch = html.match(/const currentWeekBids = \[([\s\S]*?)\n\];/);
const adMatch = html.match(/const archiveData = \[([\s\S]*?)\n\];/);
if (!cwbMatch || !adMatch) throw new Error('array markers not found');
const oldCwbInner = cwbMatch[1];
const oldAdInner = adMatch[1];

const newCwb = 'const currentWeekBids = [\n' + NEW_CWB + '\n];';
const newAd = 'const archiveData = [\n' + oldCwbInner + ',\n' + oldAdInner + '\n];';

html = html.replace(/const currentWeekBids = \[[\s\S]*?\n\];/, newCwb);
html = html.replace(/const archiveData = \[[\s\S]*?\n\];/, newAd);

/* ---------- 3. weekOptions ---------- */
const NEW_WO = `const weekOptions = [
  { id:'current', label:'最新 09.14–09.20', range:'2026年9月14日 — 9月20日', bids: currentWeekBids },
  { id:'w0907',   label:'09.07–09.13',      range:'2026年9月7日 — 9月13日',  bids: archiveData[0] },
  { id:'w0831',   label:'08.31–09.06',      range:'2026年8月31日 — 9月6日', bids: archiveData[1] },
  { id:'w0824',   label:'08.24–08.30',      range:'2026年8月24日 — 8月30日', bids: archiveData[2] },
  { id:'w0810',   label:'08.17–08.23',      range:'2026年8月17日 — 8月23日', bids: archiveData[3] },
  { id:'w0803',   label:'08.03–08.09',      range:'2026年8月3日 — 8月9日',   bids: archiveData[4] },
  { id:'w0727',   label:'07.27–08.02',      range:'2026年7月27日 — 8月2日', bids: archiveData[5] },
  { id:'w0720',   label:'07.20–07.26',      range:'2026年7月20日 — 7月26日', bids: archiveData[6] },
  { id:'w0713',   label:'07.13–07.19',      range:'2026年7月13日 — 7月19日', bids: archiveData[7] },
  { id:'w0706',   label:'07.06–07.12',      range:'2026年7月6日 — 7月12日',  bids: archiveData[8] },
  { id:'w0630',   label:'06.30–07.06',      range:'2026年6月30日 — 7月6日',  bids: archiveData[9] },
  { id:'w0622',   label:'06.22–06.28',      range:'2026年6月22日 — 6月28日', bids: archiveData[10] },
  { id:'w0420',   label:'04.20–04.24',      range:'2026年4月20日 — 4月24日', bids: archiveData[11] },
  { id:'w0323',   label:'03.23–03.27',      range:'2026年3月23日 — 3月27日', bids: archiveData[12] },
  { id:'w0126',   label:'01.26–01.30',      range:'2026年1月26日 — 1月30日', bids: archiveData[13] },
  { id:'w-supp',  label:'历史补充收集',      range:'2026年2月 — 7月 补充收集', bids: archiveData[14] },
  { id:'all',     label:'全部历史汇总',      range:'全部历史周报合并',         bids: null }
];`;
html = html.replace(/const weekOptions = \[[\s\S]*?\n\];/, NEW_WO);

/* ---------- 4. Policy cards ---------- */
const NEW_POL = `        <div class="info-card">
          <span class="tag">2026-09-14</span>
          <h4>中国进出口银行信创纵深推进：23 个系统联合开发信创改造 5596 万成交</h4>
          <p>中国进出口银行 2026 年联合开发 <b>23 个系统信息技术应用创新改造项目</b>（项目编号 0747-2660SCCZH412，代理中化商务）2026-09-14 单一来源成交：<b>建信金融科技有限责任公司 5596 万元</b>（含税）。叠加 09-08 官网系统信创改造服务 55.95 万元成交，标志政策性银行信创工作正从硬件基础设施向外围系统、<b>核心应用纵深推进</b>。建信金科此前多次参与口行信创项目（8 月曾以 176 万元中标应用性能监控平台信创改造）。</p>
        </div>
        <div class="info-card">
          <span class="tag">2026-09-16</span>
          <h4>多家银行基础软件/信创软件采购密集落地</h4>
          <p>本周银行信创软件类项目集中释放：农行吉林省分行<b>国库集中支付系统信创改造及国密适配</b>（中科江南，09-14）；宁波银行<b>基础软件正版化采购</b>（GoldenDB/OceanBase 数据库、东方通/宝兰德/中创中间件、UOS/麒麟 OS 等国产替换，09-16）；央行广东省分行<b>基础软件采购</b>（东方通 TongWeb + 电科金仓 KingbaseES，33 万元，09-16）；乐山商行消保系统信创（信雅达 31 万）、龙江银行核心系统清算改造（科蓝 120.8 万）。信创进入银行各业务系统规模化替换期。</p>
        </div>
        <div class="info-card">
          <span class="tag">2026-11-01 施行</span>
          <h4>交易商协会《银行间市场信息服务业务自律指引（试行）》进入落地准备期</h4>
          <p>交易商协会 7 月 28 日发布〔2026〕7 号公告，指引将于 <b>2026-11-01</b> 施行，共五章 28 条。全链条规范数据采集/加工/提供，划定九类禁止性行为，要求对市场有重要影响的信息服务商向协会登记。行情数据/债券估值/金融分析工具类厂商（森浦、中债估值、中证估值及各 IT 厂商数据服务线）需据此调整合规披露机制。</p>
        </div>
        <div class="info-card">
          <span class="tag">信创窗口期</span>
          <h4>金融信创 2027 年关键软硬件 100% 国产替代 — 银行软件层加速</h4>
          <p>政策明确 2027 年实现金融业关键软硬件 100% 国产替代；金融信创市场 2025 年近 2500 亿元、2026 年有望突破 3000 亿元。本周进出口银行 23 系统、农行吉林、宁波银行、央行广东省分行、乐山商行、龙江银行等多家机构信创软件类项目密集落地（详见招投标汇总信创类），资金/外汇/核心系统软件层国产化替代同步加速。</p>
        </div>
        <div class="info-card">
          <span class="tag">LPR 跟踪</span>
          <h4>季末资金面均衡偏松，LPR 延续低位运行</h4>
          <p>9 月 LPR 报价维持低位（1 年期 <b>3.00%</b>、5 年期以上 <b>3.50%</b>），连续多月持平。季末临近，央行加码逆回购呵护跨季流动性，银行体系日均净融出维持高位，资金面均衡偏松，银行间市场流动性充裕，利好金融机构季末头寸与做市业务。</p>
        </div>
        <div class="info-card">
          <span class="tag">政策前瞻</span>
          <h4>私募募集新规与金融信创窗口期并行</h4>
          <p>证监会《私募投资基金募集监督管理办法（征求意见稿）》拟升格合格投资者门槛（家庭金融资产不低于 <b>500 万</b>），财富管理/销售适当性系统或需配套改造。同步，金融信创进入 2026 规模化交付期，本周多家银行信创软件类项目密集落地，金融 IT 厂商核心系统交付节奏延续。</p>
        </div>`;

const polRe = /(<div class="panel-sub"[^>]*>银行间市场、外汇交易中心、交易商协会等机构政策通知与规则变化<\/div>\s*<div class="info-grid">)[\s\S]*?(<\/div>\s*<\/div>\s*<div class="panel reveal">\s*<div class="panel-title">\s*<span class="icon" style="background:var\(--clay-soft\))/;
if (!polRe.test(html)) throw new Error('policy cards marker not found');
html = html.replace(polRe, (m, g1, g2) => g1 + '\n' + NEW_POL + '\n' + g2);

/* ---------- 5. Industry cards ---------- */
const NEW_IND = `        <div class="info-card industry">
          <span class="tag">2026-09-16</span>
          <h4>凯美瑞德：国泰海通证券全资产系统开发建设公示 + 新三板挂牌过审</h4>
          <p>凯美瑞德(苏州)信息科技股份有限公司 2026-09-16 公示中标<b>国泰海通证券 2026 年全资产系统开发建设采购项目</b>（券商全资产系统），在券商资金/资产系统赛道再下一城；叠加 09-14 股转审核获通过、拟于新三板基础层挂牌，资本化进程提速。此前凯美瑞德已落地中国进出口银行新外币资金交易系统（1398 万）、渤海银行新一代综合资金业务管理系统，在政策性银行 + 股份行 + 券商资金交易系统持续突破。</p>
        </div>
        <div class="info-card industry">
          <span class="tag">2026-09-18</span>
          <h4>恒生电子本周约 15 单领跑，光大理财 129.8 万、西南证券信创 193.761 万 + 239 万</h4>
          <p>本周恒生电子中标/公告密集：光大理财销售端资金清算系统 T05 接口改造 <b>129.8 万元</b>、国信资管交易所改造 <b>102.3 万元</b>、西南证券集中交易系统信创改造 <b>193.761 万元</b> + 深市 RTGS 优化 <b>239 万元</b>、中加基金公募销售费率改革 <b>278 万元</b>、国开证券反洗钱隔离墙维护 <b>96 万元</b>、渤银理财投资交易系统续建、建信基金龙钱宝 2 号升级、辽沈银行供应链系统、兴业证券 AST 极速交易信创等。UF3.0 本周在财通证券全面上线（全栈国产化底座赋能财富管理转型）。</p>
        </div>
        <div class="info-card industry">
          <span class="tag">2026-09-16</span>
          <h4>金仕达信创风控条线放量：国新证券信息隔离墙信创 74 万、甬兴证券反洗钱信创</h4>
          <p>金仕达本周落地国新证券<b>从业人员投资申报及信息隔离墙信创版本与升级模块 74 万元</b>（09-16）、甬兴证券<b>反洗钱系统信创改造</b>（09-16，中标候选人公示）、财信期货金仕达新一代期货风险监控软件信创改造（09-14）、中证指数业务数据维护系统（二期）等，在券商信创合规风控赛道持续领先。此前金仕达已双第一候选中标原银行新一代资金交易管理系统（前台 168 万 + 中台风控 226 万）。</p>
        </div>
        <div class="info-card industry">
          <span class="tag">2026-09-16</span>
          <h4>衡泰 / 兆尹各有斩获：华安证券信用风控信创、华泰证券托管数据 255 万</h4>
          <p>衡泰技术本周中标华安证券<b>信用风险管理系统信创改造</b>（09-16，候选公示）、中证指数业务数据维护系统（二期）；兆尹信息中标华泰证券<b>托管数据服务平台软件模块 255 万元</b>（09-14）、中信信托职业年金受托运营管理系统（09-14，候选）。衡泰/兆尹在券商风险/数据、理财子/信托资管条线持续放量。</p>
        </div>
        <div class="info-card industry">
          <span class="tag">2026-09-14</span>
          <h4>国有大行 / 政策性银行信创软件密集：口行 23 系统 5596 万、农行吉林、建信基金</h4>
          <p>中国进出口银行 <b>23 个系统信创改造 5596 万元</b>（建信金科，09-14）为本周单笔最大信创软件订单；农行吉林省分行国库集中支付系统信创改造（中科江南，09-14）、建信基金"龙钱宝 2 号"功能适配建行升级改造（恒生，09-14）、央行广东省分行基础软件 33 万元（东方通 + 金仓）。信创从硬件向核心应用系统纵深推进。</p>
        </div>
        <div class="info-card industry">
          <span class="tag">2026-09-16</span>
          <h4>城商行信创软件类项目落地：乐山消保 31 万、龙江核心 120.8 万、宁波基础软件</h4>
          <p>乐山市商业银行<b>消费者权益保护系统优化信创改造 31 万元</b>（信雅达，09-15）；龙江银行<b>新一代核心系统第三方清算系统配合改造 120.8 万元</b>（科蓝软件，09-16）；宁波银行<b>基础软件正版化采购</b>（GoldenDB/OceanBase 数据库、东方通/宝兰德/中创中间件、UOS/麒麟 OS 国产替换，09-16）。城商行国产数据库/中间件/应用系统替换加速，"所有银行"采集要求本周覆盖政策性/国有/股份/城商/理财子。</p>
        </div>
        <div class="info-card industry">
          <span class="tag">2026-09-14</span>
          <h4>服贸会（9.9–9.13 北京）金融 AI 创新：凯美瑞德智能化交易策略平台获 AI+ 大奖</h4>
          <p>2026 年中国国际服务贸易交易会（9 月 9 日–13 日，北京）期间，凯美瑞德"智能化交易策略应用平台"荣获 <b>2026 服贸会 AI+ 创新应用大奖</b>（09-14 披露）；多家金融 IT 厂商集中展示 AI + 金融应用，金融 AI 进入场景落地期。恒生"灵语客服"、同花顺 i 问财等多智能体持续迭代，企业级 AI Agent 站上风口。</p>
        </div>`;

const indRe = /(<div class="panel-sub"[^>]*>金融IT厂商客户案例、产品发布、行业峰会与金融科技创新<\/div>\s*<div class="info-grid">)[\s\S]*?(<\/div>\s*<\/div>\s*<\/div>\s*<!-- ===== Tab 4: Archive ===== -->)/;
if (!indRe.test(html)) throw new Error('industry cards marker not found');
html = html.replace(indRe, (m, g1, g2) => g1 + '\n' + NEW_IND + '\n' + g2);

/* ---------- 6. radar items (prepend this week) ---------- */
const NEW_RADAR = `  { type:'news', bank:'国泰海通证券 / 凯美瑞德', date:'2026-09-16', title:'国泰海通证券 2026 年全资产系统开发建设采购项目公示 — 凯美瑞德中标', content:'国泰海通证券 2026 年全资产系统开发建设采购项目（公示 2026-09-16）供应商为凯美瑞德(苏州)信息科技股份有限公司，属券商全资产系统建设。叠加 09-14 股转审核过审、拟新三板挂牌，凯美瑞德在券商/政策性银行/股份行资金交易系统持续突破，资本化提速。', source:'国泰海通证券采购平台', sourceUrl:'https://supplier.gtht.com/#/procurnotice?type=&id=73729fee252a4ed4b46f20aa914c27b5' },
  { type:'news', bank:'中国进出口银行', date:'2026-09-14', title:'进出口银行 23 个系统信创改造 5596 万成交 — 建信金科', content:'中国进出口银行 2026 年联合开发 23 个系统信息技术应用创新改造项目（编号 0747-2660SCCZH412，代理中化商务）2026-09-14 单一来源成交：建信金融科技有限责任公司 5596 万元（含税）。政策性银行信创从硬件向核心应用系统纵深推进，本周单笔最大信创软件订单。', source:'中国进出口银行官网/信创世界', sourceUrl:'' },
  { type:'news', bank:'恒生电子', date:'2026-09-18', title:'恒生电子本周约 15 单领跑 — 光大理财 129.8 万、西南证券信创 193.761 万 + 239 万', content:'本周恒生电子中标/公告密集：光大理财销售端资金清算 T05 接口改造 129.8 万、国信资管交易所改造 102.3 万、西南证券集中交易信创改造 193.761 万 + 深市 RTGS 优化 239 万、中加基金公募销售费率改革 278 万、国开证券反洗钱隔离墙维护 96 万、渤银理财投资交易系统续建、建信基金龙钱宝 2 号升级、辽沈银行供应链系统、兴业证券 AST 极速交易信创等。UF3.0 财通证券全面上线。', source:'各机构采购平台·成交公告', sourceUrl:'' },
  { type:'news', bank:'多家银行信创', date:'2026-09-16', title:'多家银行信创软件密集：农行吉林、宁波银行、乐山商行、龙江银行、央行广东省分行', content:'本周银行信创软件类项目集中释放：农行吉林省分行国库集中支付系统信创（中科江南）、宁波银行基础软件正版化（GoldenDB/OceanBase/东方通等）、乐山商行消保系统信创（信雅达 31 万）、龙江银行核心系统清算改造（科蓝 120.8 万）、央行广东省分行基础软件（东方通+金仓 33 万）。信创进入银行各业务系统规模化替换期。', source:'各银行采购平台·成交公告', sourceUrl:'' },
  { type:'plan', bank:'兴业银行', date:'2026-09-18', title:'零贷信贷工厂架构重构配套改造 — 中标候选人公示，待发中标结果', content:'兴业银行零贷信贷工厂架构重构配套改造项目研发实施服务（招标编号 FJTP-FJTC261713165）2026-09-18 中标候选人公示（投标截止/开标 09-18 09:30）。项目赋能零售贷款影像材料分拣/自动录入（OCR/影像），属股份行零售信贷系统重构配套。下一步：公示期满后关注正式中标结果公告与合同签订。', source:'方圆招标·中标候选人公示', sourceUrl:'https://www.fycbid.com/#/notice/detail-upgrade?bidId=2092416993691234306&bulletinId=2100882497528725506' },
  { type:'plan', bank:'中国光大银行', date:'2026-09-18', title:'外部数据管理平台银税数据接入子系统 — 微众信用第一候选，待发中标结果', content:'中国光大银行外部数据管理平台外部数据接入与运营之银税数据接入子系统项目（第二次）2026-09-18 中标候选人公示：第一候选深圳微众信用科技股份有限公司。属股份行数据服务软件建设。下一步：公示期满后关注正式中标结果公告。', source:'诚招招标/光大银行官网·中标候选人公示', sourceUrl:'https://www.chengezhao.com/cms/post/4/0/4003b5b8ca755353055cf7ff6864d745/' }`;

html = html.replace('  // ===== 本周（09.07–09.13）新增招采/舆情 =====',
  '  // ===== 本周（09.14–09.20）新增招采/舆情 =====\n' + NEW_RADAR + '\n  // ===== 上周（09.07–09.13）结转 =====');

fs.writeFileSync(p, html, 'utf8');
console.log('OK: updated index.html');
console.log('currentWeekBids entries:', (NEW_CWB.match(/\{bidder:/g) || []).length);
console.log('archiveData now has old-current prepended; length check via weekOptions w0907 added.');
