import json, pathlib, sys
path = pathlib.Path(r"c:/Midhuna/Five-Newssites/snewssitemi/public/data/technology.json")
try:
    data = json.load(path.open('r', encoding='utf-8'))
    print('Valid JSON, articles count:', len(data))
except Exception as e:
    print('JSON error:', e)
    sys.exit(1)
