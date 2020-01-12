from PIL import Image
import os


# config
FILE_NAME = 'floor_tiles.png'
RECOLORED_FILE = 'floor_tiles1.png'

COLOR_MAPPINGS = {
#  pre : post
	(219, 175, 102) : (80, 120, 130, 255),
	(214, 164, 80) : (70, 110, 120, 255),
	(208, 152, 57) : (60, 100, 120, 255),
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

    