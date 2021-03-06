from PIL import Image
import os


# config
FILE_NAME = ''
RECOLORED_FILE = ''

COLOR_MAPPINGS = {
#  pre : post
	(255, 255, 255) : (0, 0, 0, 255),
}

# replacing colors
img = Image.open(FILE_NAME)
pix = img.load()

for x in range(img.size[0]):
	for y in range(img.size[1]):
		col = pix[x, y][0:3]
		if col in COLOR_MAPPINGS:
			pix[x, y] = COLOR_MAPPINGS[col]
		
img.save(RECOLORED_FILE)

    