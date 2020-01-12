from PIL import Image
import os


# config
FILE_NAME = 'wall_tiles.png'
RECOLORED_FILE = 'wall_tiles1.png'

COLOR_MAPPINGS = {
#  pre : post
	(43, 21, 0) : (20, 20, 40, 255),
	(36, 18, 0) : (15, 15, 30, 255),
	(30, 15, 0) : (10, 10, 20, 255),
	(15, 7, 0) : (5, 5, 10, 255),
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

    