import re

# Read the file
with open('src/data/projects.js', 'r', encoding='utf-8') as f:
    content = f.read()

# Replace all image: '/assets/ with image: `${BASE_URL}assets/
content = re.sub(r"image: '(/assets/[^']+)'", r"image: `${BASE_URL}\1`", content)

# Write back
with open('src/data/projects.js', 'w', encoding='utf-8', newline='\r\n') as f:
    f.write(content)

print("Fixed all image paths!")
