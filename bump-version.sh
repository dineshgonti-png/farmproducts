#!/bin/bash
# Bump the ?v= cache-buster on CSS/JS so returning visitors get new code
# immediately instead of waiting out GitHub Pages' 10-minute cache.
# Run this before committing any change to assets/.
cd "$(dirname "$0")"
VER=$(date +%Y%m%d%H%M)
python3 - "$VER" <<'PY'
import glob, re, sys
ver = sys.argv[1]
for f in glob.glob('*.html'):
    s = open(f).read()
    s = re.sub(r'(assets/(?:css/styles\.css|js/data\.js|js/app\.js))(\?v=\d+)?', r'\1?v=' + ver, s)
    open(f, 'w').write(s)
print("assets versioned:", ver)
PY
