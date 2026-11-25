import json, pathlib, sys
path = pathlib.Path(r"c:/Midhuna/Five-Newssites/snewssitemi/public/data/technology.json")
try:
    data = json.load(path.open('r', encoding='utf-8'))
    print('JSON valid, items:', len(data))
except Exception as e:
    print('Error:', e)
    sys.exit(1)
