from PIL import Image
import os

ROOT_PATH = '..\\app\\assets\\images'
BG_COLOR = (255, 255, 255, 255) # white pixel with full alpha

for filename in os.listdir(ROOT_PATH):
    if(filename.endswith('.png')):
        print(filename) 
        img = Image.open(f'{ROOT_PATH}\\{filename}')
        width, height = img.size
        pix = img.load()

        for x in range(width):
            for y in range(height):
                if(pix[x, y] == BG_COLOR):
                    pix[x, y] = (255, 255, 255, 0) # white pixel with no alpha
        
        img.save(f'{ROOT_PATH}\\{filename}')
