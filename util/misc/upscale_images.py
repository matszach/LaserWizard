from PIL import Image
import os

ROOT_PATH = '..\\app\\assets\\images'

SCALE = 4

for filename in os.listdir(ROOT_PATH):
    print(filename) 
    if(filename.endswith('.png')):

        img = Image.open(f'{ROOT_PATH}\\{filename}')
        width, height = img.size
        pix = img.load()
		
        newImg = Image.new('RGBA', (SCALE * width, SCALE * height))
        newPix = newImg.load()

        for x in range(width):
            for y in range(height):
                col = pix[x, y]
                for ix in range(SCALE):
                    for iy in range(SCALE):
                        newPix[SCALE * x + ix, SCALE * y + iy] = col

        newImg.save(f'{ROOT_PATH}\\{filename}')

    