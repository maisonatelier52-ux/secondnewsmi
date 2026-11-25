import json, pathlib, sys

def clean_nested(data, target_title):
    if isinstance(data, list):
        new_list = []
        for item in data:
            if isinstance(item, dict) and item.get('title') == target_title:
                # keep top-level article, but need to clean its description recursively
                cleaned_item = clean_nested(item, target_title)
                new_list.append(cleaned_item)
            else:
                new_list.append(clean_nested(item, target_title))
        return new_list
    elif isinstance(data, dict):
        # if this dict is a nested article inside description, it may have title
        if data.get('title') == target_title and not any(k in data for k in ['category','slug','image','date','shortdescription','description','author']):
            # this is a stray duplicate (likely only title field)
            return None
        cleaned = {}
        for k, v in data.items():
            if isinstance(v, list):
                cleaned_list = []
                for elem in v:
                    cleaned_elem = clean_nested(elem, target_title)
                    if cleaned_elem is not None:
                        cleaned_list.append(cleaned_elem)
                cleaned[k] = cleaned_list
            else:
                cleaned[k] = clean_nested(v, target_title) if isinstance(v, (list, dict)) else v
        return cleaned
    else:
        return data

FILE = pathlib.Path(r"c:/Midhuna/Five-Newssites/snewssitemi/public/data/technology.json")
TARGET = "Anthropic’s record IPO raises hopes for a charitable windfall that has nonprofits preparing to scale"

try:
    data = json.load(FILE.open('r', encoding='utf-8'))
except Exception as e:
    print('Failed to load JSON:', e)
    sys.exit(1)

cleaned = clean_nested(data, TARGET)

# remove any None entries from top-level list
cleaned = [item for item in cleaned if item is not None]

FILE.open('w', encoding='utf-8').write(json.dumps(cleaned, ensure_ascii=False, indent=2))
print('Cleanup complete, size', len(cleaned))
