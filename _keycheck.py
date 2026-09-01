import re, json, ssl, urllib.request

# 从 gitignore 掉的本地文件里读 key，用完即弃，不打印全文
src = open('qwen-key.js', encoding='utf-8').read()
m = re.search(r'window\.QWEN_DEFAULT_KEY\s*=\s*"([^"]+)"', src)
if not m:
    print('未从 qwen-key.js 解析到 key'); raise SystemExit(1)
key = m.group(1)
print('key 前缀:', key[:8] + '...', '长度:', len(key))

body = json.dumps({
    "model": "qwen-plus",
    "temperature": 0.7,
    "enable_thinking": False,
    "messages": [
        {"role": "system", "content": "你是助手。"},
        {"role": "user", "content": "只回复两个字：正常"}
    ]
}).encode('utf-8')

ctx = ssl.create_default_context()
req = urllib.request.Request(
    'https://dashscope.aliyuncs.com/compatible-mode/v1/chat/completions',
    data=body,
    headers={'Content-Type': 'application/json', 'Authorization': 'Bearer ' + key},
    method='POST')

try:
    r = urllib.request.urlopen(req, timeout=60, context=ctx)
    j = json.loads(r.read().decode('utf-8'))
    txt = j['choices'][0]['message']['content']
    print('HTTP', r.status, '| 响应:', txt.strip()[:60])
    print('>>> 内置 Key 有效，国内镜像开箱即用')
except urllib.error.HTTPError as e:
    print('HTTP', e.code, '|', e.read().decode('utf-8', 'ignore')[:300])
    print('>>> 内置 Key 无效或已失效，需更换')
except Exception as e:
    print('ERR', type(e).__name__, e)
