from PIL import Image
import os

ROOT_PATH = '..\\app\\assets\\images\\'
ICONS_PATH = f'{ROOT_PATH}\\icons\\'

items = Image.open(f'{ROOT_PATH}items.png')
misc = Image.open(f'{ROOT_PATH}misc.png')

def create_icon(image: Image, icon_name: str, tile: tuple, tile_size: int = 64, border_size : int = 4):
    print(icon_name)
    icon = Image.new('RGBA', (tile_size, tile_size))
    icon_pix = icon.load()
    image_pix = image.load()
    x_offset = tile[0] * (tile_size + border_size)
    y_offset = tile[1] * (tile_size + border_size)
    for x in range(tile_size):
        for y in range(tile_size):
            icon_pix[x, y] = image_pix[x + x_offset, y + y_offset]
    icon.save(f'{ICONS_PATH}{icon_name}.png')


create_icon(items, 'battery-red', (0, 0))
create_icon(items, 'battery-yellow', (1, 0))
create_icon(items, 'battery-blue', (2, 0))

create_icon(items, 'weapon-1-n', (0, 1))
create_icon(items, 'weapon-2-r1', (1, 1))
create_icon(items, 'weapon-3-r2', (2, 1))
create_icon(items, 'weapon-4-r3', (3, 1))
create_icon(items, 'weapon-5-y1', (4, 1))
create_icon(items, 'weapon-6-y2', (5, 1))
create_icon(items, 'weapon-7-y3', (6, 1))
create_icon(items, 'weapon-8-b1', (7, 1))
create_icon(items, 'weapon-9-b2', (8, 1))
create_icon(items, 'weapon-10-b3', (9, 1))

create_icon(misc, 'heart', (2, 0))
create_icon(misc, 'shield', (4, 0))


