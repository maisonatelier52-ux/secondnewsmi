import pathlib, re, sys

FILE = pathlib.Path(r"c:/Midhuna/Five-Newssites/snewssitemi/public/data/technology.json")
text = FILE.read_text(encoding='utf-8')

# Pattern to match a nested article object inside description arrays that starts with {"category": "technology", "title": "Anthropic’s record IPO raises hopes for a charitable windfall that has nonprofits preparing to scale"
# We need to match the whole object including nested braces.
# We'll use a simple approach: locate the specific title and delete from the preceding '{' that starts the object up to the matching closing '}' followed by optional comma.

title = r"Anthropic’s record IPO raises hopes for a charitable windfall that has nonprofits preparing to scale"

# Use regex to find occurrences of "title": "..." and then backtrack to the preceding '{' that is at line start or after a comma.
pattern = re.compile(r"(,\s*)?\{\s*\"category\": \"technology\",\s*\"title\": \"" + re.escape(title) + r"\".*?\}\s*,?", re.DOTALL)

cleaned_text, count = pattern.subn('', text)
print(f"Removed {count} nested article objects.")

FILE.write_text(cleaned_text, encoding='utf-8')
print('Cleanup complete.')
