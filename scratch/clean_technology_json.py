import json, sys, pathlib

FILE = pathlib.Path(r"c:/Midhuna/Five-Newssites/snewssitemi/public/data/technology.json")
TARGET_TITLE = "Anthropic’s record IPO raises hopes for a charitable windfall that has nonprofits preparing to scale"

with FILE.open('r', encoding='utf-8') as f:
    data = json.load(f)

# data is a list of top-level articles

def clean_descriptions(obj):
    if isinstance(obj, dict):
        for key, val in obj.items():
            if isinstance(val, list):
                # filter list if items are dicts with matching title
                new_list = []
                for item in val:
                    if isinstance(item, dict) and item.get('title') == TARGET_TITLE:
                        # skip nested duplicate
                        continue
                    # recurse inside item as well
                    new_list.append(clean_descriptions(item))
                obj[key] = new_list
            else:
                obj[key] = clean_descriptions(val)
    elif isinstance(obj, list):
        return [clean_descriptions(i) for i in obj]
    return obj

cleaned = clean_descriptions(data)

# write back pretty formatted JSON
with FILE.open('w', encoding='utf-8') as f:
    json.dump(cleaned, f, ensure_ascii=False, indent=2)

print('Cleaned technology.json, removed nested duplicate articles.')
