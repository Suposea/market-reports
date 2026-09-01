import urllib.request, ssl, hashlib, gzip, sys

ctx = ssl.create_default_context()
ctx.check_hostname = False
ctx.verify_mode = ssl.CERT_NONE

local = open('index.html', 'rb').read()
print('本地 index.html: %d bytes  md5 %s' % (len(local), hashlib.md5(local).hexdigest()[:12]))
print()

BASES = [
    ('CloudBase', 'https://supoman-d9g2fbeci8965fd08-1457021100.tcloudbaseapp.com/market-reports/'),
    ('GitHub', 'https://suposea.github.io/market-reports/'),
]
MARKERS = ['currentWeekBids', 'qwen.html', 'renderBidsTable', 'sourceCell']

for name, base in BASES:
    try:
        r = urllib.request.urlopen(
            urllib.request.Request(base + 'index.html', headers={'User-Agent': 'Mozilla/5.0'}),
            timeout=40, context=ctx)
        raw = r.read()
        enc = r.headers.get('Content-Encoding', '(none)')
        print('%s | Content-Encoding: %s | wire: %d bytes' % (name, enc, len(raw)))
        body = gzip.decompress(raw) if enc == 'gzip' else raw
        print('   解压后: %d bytes  md5 %s  与本地一致: %s'
              % (len(body), hashlib.md5(body).hexdigest()[:12], body == local))
        for m in MARKERS:
            print('   含 %-16s : %s' % (m, m.encode('utf-8') in body))
    except Exception as e:
        print('%s ERR %s %s' % (name, type(e).__name__, e))
    print()
