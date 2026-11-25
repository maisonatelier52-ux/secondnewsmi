import json
import re

path = r'C:/Midhuna/Five-Newssites/snewssitemi/public/data/technology.json'

with open(path, 'r', encoding='utf-8') as f:
    data = json.load(f)

def truncate_to_word_limit(text, min_words=200, max_words=300):
    words = re.findall(r'\S+', text)
    if len(words) < min_words:
        # If too short, just return original (or could pad). We'll keep original.
        return text
    # Truncate to max_words
    truncated = ' '.join(words[:max_words])
    # Ensure ends with a period.
    if not truncated.endswith('.'):
        truncated += '.'
    return truncated

for article in data:
    if isinstance(article, dict) and 'description' in article:
        for entry in article['description']:
            if 'text' in entry:
                entry['text'] = truncate_to_word_limit(entry['text'])

with open(path, 'w', encoding='utf-8') as f:
    json.dump(data, f, indent=2, ensure_ascii=False)
