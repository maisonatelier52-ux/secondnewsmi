import json, sys
path = r'C:/Midhuna/Five-Newssites/snewssitemi/public/data/technology.json'
try:
    with open(path, 'r', encoding='utf-8') as f:
        data = json.load(f)
    print('Valid JSON, count:', len(data))
except json.JSONDecodeError as e:
    print('JSON error:', e)
    sys.exit(1)
