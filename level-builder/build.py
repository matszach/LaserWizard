from PIL import Image, ImageDraw
import numpy as np
from random import randint
from json import dumps, loads

UNIT = 64
BORDER = 4

# =================================== color constants ===================================
# --- structure
EMPTY = (255, 255, 255)
WALL = (0, 0, 0)
DECOR_1_WALL = (30, 30, 30)
DECOR_1_FLOOR = (180, 250, 180)
DECOR_2_FLOOR = (180, 180, 180)
DECOR_3_FLOOR_4T = (160, 160, 160)

# --- doors and keys
CYAN_DOOR = (255, 0, 255)

TEAL_DOOR = (0, 255, 255)

DOOR_BEACON = (120, 60, 30)

# --- player 
PLAYER_SPAWN = (255, 125, 0)
PLAYER_EXIT = (150, 75, 0)

# --- monsters
MONSTER_SPAWN_BEACON = (255, 0, 100) 

# --- items
ITEMS = {
    # color : item_id, name
    (0, 90, 0)      : (0, 'small health'), 
    (0, 150, 0)     : (1, 'medium health'), 
    (0, 255, 0)     : (2, 'big health'),
    (255, 0, 0)     : (3, 'red energy'),
    (255, 255, 0)   : (4, 'yellow energy'),
    (0, 0, 255)     : (5, 'blue energy'),
    (150, 0, 0)     : (6, 'weapon 2 (red +)'),
    (100, 0, 0)     : (7, 'weapon 3 (red + +)'),
    (50, 0, 0)      : (8, 'weapon 4 (red + + +)'),
    (150, 150, 0)   : (9, 'weapon 5 (yellow +)'),
    (100, 100, 0)   : (10, 'weapon 6 (yellow + +)'),
    (50, 50, 0)     : (11, 'weapon 7 (yellow + + +)'),
    (0, 0, 150)     : (12, 'weapon 8 (blue +)'),
    (0, 0, 100)     : (13, 'weapon 9 (blue + +)'),
    (0, 0, 50)      : (14, 'weapon 0 (blue + + +)'),
    (0, 150, 150)   : (15, 'cyan key'),
    (150, 0, 150)   : (16, 'magenta key')
}

ITEMS_IMG = {
    0 : (3, 0), 
    1 : (4, 0),
    2 : (5, 0),
    3 : (0, 0),
    4 : (1, 0),
    5 : (2, 0),
    6 : (1, 1),
    7 : (2, 1),
    8 : (3, 1),
    9 : (4, 1),
    10: (5, 1),
    11: (6, 1),
    12: (7, 1),
    13: (8, 1),
    14: (9, 1),
    15: (7, 0),
    16: (6, 0)
}

MONSTER_IMG = {
    0 : ((0, 0), 'zombie'),
    1 : ((0, 1), 'drone')
}

# --- event triggers



# =================================== config ===================================
nof_stages_ready = 2


# =================================== functions ===================================
def is_field_in(pixels, x: int, y: int, acceptable_ids: list):
    try: 
        return pixels[x, y][0:3] in acceptable_ids
    except IndexError:
        return True

# =================================== level building ===================================
for i in range(1, nof_stages_ready + 1):

    print(f'======================== Building stage {i} ========================')

    image = Image.open(f'in\\stage{i}\map.png')
    monster_beacons = loads(''.join([line for line in open(f'in\\stage{i}\\monster_beacons.json')]))
    monster_beacon_index = 0
    door_beacons = loads(''.join([line for line in open(f'in\\stage{i}\\door_beacons.json')]))
    door_beacon_index = 0
    width, height = image.size
    pixels = image.load()

    level = {}
    level['floorIds'] = np.zeros((width, height, 2), dtype=int).tolist()
    level['wallIds'] = np.zeros((width, height, 2), dtype=int).tolist()
    level['collisionMap'] = np.zeros((width, height), dtype=int).tolist()
    level['items'] = []
    level['monsterSpawnBeacons'] = []
    level['doorBeacons'] = []


    for y in range(height):
        for x in range(width):

            # defaults
            level['floorIds'][x][y] = [randint(0, 11), 0]
            level['wallIds'][x][y] = [0, 0]
            level['collisionMap'][x][y] = 0

            # only the first 3 values (RGB w/o alpha)
            c = pixels[x, y][0:3] 


            if c == EMPTY:
                if randint(1, 100) > 95:
                    level['floorIds'][x][y][1] = 2  # move to 'damaged tiles' row


            elif c == DECOR_1_FLOOR:
                level['floorIds'][x][y] = [randint(0, 3), 1]
				
				
            elif c == DECOR_2_FLOOR:
                level['floorIds'][x][y] = [randint(4, 11), 1]


            elif c == DECOR_3_FLOOR_4T:
                left = is_field_in(pixels, x-1, y, [DECOR_3_FLOOR_4T])
                top = is_field_in(pixels, x, y-1, [DECOR_3_FLOOR_4T])
                right = is_field_in(pixels, x+1, y, [DECOR_3_FLOOR_4T])
                bottom = is_field_in(pixels, x, y+1, [DECOR_3_FLOOR_4T])
                if(right and bottom):
                    level['floorIds'][x][y] = [10, 3]
                elif(left and bottom):
                    level['floorIds'][x][y] = [11, 3]
                elif(right and top):
                    level['floorIds'][x][y] = [10, 4]
                elif(left and top):
                    level['floorIds'][x][y] = [11, 4]

                
            elif c == WALL:

                left = is_field_in(pixels, x-1, y, [DECOR_1_WALL, WALL])
                top = is_field_in(pixels, x, y-1, [DECOR_1_WALL, WALL])
                right = is_field_in(pixels, x+1, y, [DECOR_1_WALL, WALL])
                bottom = is_field_in(pixels, x, y+1, [DECOR_1_WALL, WALL])

                x_index = 0
                y_index = 0

                if left and top and right and bottom:
                    x_index = 1
                    y_index = 0
                elif not left and top and right and bottom:
                    x_index = 0
                    y_index = 1
                elif left and not top and right and bottom:
                    x_index = 1
                    y_index = 1
                elif left and top and not right and bottom:
                    x_index = 2
                    y_index = 1
                elif left and top and right and not bottom:
                    x_index = 3
                    y_index = 1
                elif not left and not top and right and bottom:
                    x_index = 0
                    y_index = 2
                elif left and not top and not right and bottom:
                    x_index = 1
                    y_index = 2
                elif left and top and not right and not bottom:
                    x_index = 2
                    y_index = 2
                elif not left and top and right and not bottom:
                    x_index = 3
                    y_index = 2
                else:
                    x_index = 3
                    y_index = 0
                
                t = randint(1, 100)
                if t > 66:
                    x_index += 4
                elif t > 33:
                    x_index += 8

                level['wallIds'][x][y] = [x_index, y_index]
                level['collisionMap'][x][y] = 1
				
				
            elif c == DECOR_1_WALL:

                left = is_field_in(pixels, x-1, y, [DECOR_1_WALL, WALL])
                top = is_field_in(pixels, x, y-1, [DECOR_1_WALL, WALL])
                right = is_field_in(pixels, x+1, y, [DECOR_1_WALL, WALL])
                bottom = is_field_in(pixels, x, y+1, [DECOR_1_WALL, WALL])

                x_index = 0
                y_index = 0

                if not left and top and right and bottom:
                    x_index = 0
                    y_index = 5
                elif left and not top and right and bottom:
                    x_index = 1
                    y_index = 5
                elif left and top and not right and bottom:
                    x_index = 2
                    y_index = 5
                elif left and top and right and not bottom:
                    x_index = 3
                    y_index = 5

                t = randint(1, 100)
                if t > 66:
                    x_index += 4
                elif t > 33:
                    x_index += 8

                level['wallIds'][x][y] = [x_index, y_index]
                level['collisionMap'][x][y] = 1
                

            elif c == TEAL_DOOR:
                level['wallIds'][x][y] = [1, 3]
                level['floorIds'][x][y] = [1, 3]
                level['collisionMap'][x][y] = 1


            elif c == CYAN_DOOR:
                level['wallIds'][x][y] = [0, 3]
                level['floorIds'][x][y] = [0, 3]
                level['collisionMap'][x][y] = 1


            elif c in ITEMS.keys():
                item = {
                    'id': ITEMS[c][0],
                    'x' : x,
                    'y' : y,
                }
                level['items'].append(item)

            elif c == MONSTER_SPAWN_BEACON:
                msb = {
                    'x' : x,
                    'y' : y,
                    'triggerRange' : 0,
                    'monsterList' : []
                }
                if monster_beacon_index < len(monster_beacons):
                    msb['monsterList'] = monster_beacons[monster_beacon_index]['monsterList']
                    msb['triggerRange'] = monster_beacons[monster_beacon_index]['triggerRange']

                level['monsterSpawnBeacons'].append(msb)
                monster_beacon_index += 1

            elif c == DOOR_BEACON:
                db = {
                    'x' : x,
                    'y' : y,
                    'triggerRange' : 0,
                    'affectedTiles' : [],
                    'condition' : 0                 # 0 - none, 1 - has cyan(magenta) key, 2 - has teal key 
                }
                if door_beacon_index < len(door_beacons):
                    db['affectedTiles'] = door_beacons[door_beacon_index]['affectedTiles']
                    db['triggerRange'] = door_beacons[door_beacon_index]['triggerRange']
                    db['condition'] = door_beacons[door_beacon_index]['condition']

                level['doorBeacons'].append(db)
                door_beacon_index += 1

            elif c == PLAYER_EXIT:
                left = is_field_in(pixels, x-1, y, [PLAYER_EXIT])
                top = is_field_in(pixels, x, y-1, [PLAYER_EXIT])
                right = is_field_in(pixels, x+1, y, [PLAYER_EXIT])
                bottom = is_field_in(pixels, x, y+1, [PLAYER_EXIT])

                player_exit_map = {
                    # l, t, r, b : x, y
                    (False, False, True, True) : (9, 5),
                    (True, False, True, True) : (10, 5),
                    (True, False, False, True) : (11, 5),
                    (False, True, True, True) : (9, 6),
                    (True, True, True, True) : (10, 6),
                    (True, True, False, True) : (11, 6),
                    (False, True, True, False) : (9, 7),
                    (True, True, True, False) : (10, 7),
                    (True, True, False, False) : (11, 7)
                }

                sx, sy = player_exit_map[(left, top, right, bottom)]
                level['floorIds'][x][y] = [sx, sy]
                if(left and right and top and bottom):
                    level['playerExitBeacon'] = {
                        'x': x,
                        'y': y
                    }

            elif c == PLAYER_SPAWN:
                level['player'] = {
                    'x': x,
                    'y': y
                }


    # post parse 
    # create json
    with open(f'out\\json\\stage{i}.json', 'w+') as f:
        f.write(dumps(level))

    # create preview
    preview = Image.new('RGBA', (width * UNIT, height * UNIT), (255, 255, 255))
    preview_draw = ImageDraw.Draw(preview)

    walls = Image.open(f'..\\app\\assets\\images\\wall_tiles.png')
    floors = Image.open(f'..\\app\\assets\\images\\floor_tiles.png')
    items = Image.open(f'..\\app\\assets\\images\\items.png')
    misc = Image.open(f'..\\app\\assets\\images\\misc.png')
    monsters = Image.open(f'..\\app\\assets\\images\\monsters.png')
    player = Image.open(f'..\\app\\assets\\images\\player.png')
    
    for x in range(width):
        for y in range(height):
            # floors
            f_x = level['floorIds'][x][y][0]
            f_y = level['floorIds'][x][y][1]
            f_area = (f_x * (UNIT + BORDER), f_y * (UNIT + BORDER), f_x * (UNIT + BORDER) + UNIT, f_y * (UNIT + BORDER) + UNIT)
            f_image = floors.crop(f_area)
            preview.paste(f_image, (x * UNIT, y * UNIT), f_image)
            # walls
            w_x = level['wallIds'][x][y][0]
            w_y = level['wallIds'][x][y][1]
            w_area = (w_x * (UNIT + BORDER), w_y * (UNIT + BORDER), w_x * (UNIT + BORDER) + UNIT, w_y * (UNIT + BORDER) + UNIT)
            w_image = walls.crop(w_area)
            preview.paste(w_image, (x * UNIT, y * UNIT), w_image)
    
    # items
    for it in level['items']:
        it_x, it_y = ITEMS_IMG[it['id']]
        it_area = (it_x * (UNIT + BORDER), it_y * (UNIT + BORDER), it_x * (UNIT + BORDER) + UNIT, it_y * (UNIT + BORDER) + UNIT)
        it_image = items.crop(it_area)
        preview.paste(it_image, (it['x'] * UNIT, it['y'] * UNIT), it_image)

    # msb
    for msb in level['monsterSpawnBeacons']:
        msb_image = misc.crop((0, 0, UNIT, UNIT))
        preview.paste(msb_image, (msb['x'] * UNIT, msb['y'] * UNIT), msb_image)
        for m in msb['monsterList']:
            m_id = m['id']
            m_data = MONSTER_IMG[m_id]
            m_x, m_y = m_data[0]
            m_area = (m_x * (UNIT + BORDER), m_y * (UNIT + BORDER), m_x * (UNIT + BORDER) + UNIT, m_y * (UNIT + BORDER) + UNIT)
            m_image = monsters.crop(m_area)
            preview.paste(m_image, ((msb['x'] + m['relX']) * UNIT, (msb['y'] + m['relY']) * UNIT), m_image)
            preview_draw.line((msb['x'] * UNIT + UNIT/2 , msb['y'] * UNIT + UNIT/2, 
                            (msb['x'] + m['relX']) * UNIT + UNIT/2, (msb['y'] + m['relY']) * UNIT + UNIT/2), 
                            fill='white', width=2)
        tr = msb['triggerRange']
        preview_draw.ellipse(((msb['x'] - tr) * UNIT + UNIT/2, (msb['y'] - tr) * UNIT + UNIT/2,
                        (msb['x'] + tr) * UNIT + UNIT/2, (msb['y'] + tr) * UNIT + UNIT/2), 
                        fill=None, outline='red', width=3)

    # db
    for db in level['doorBeacons']:
        db_image = misc.crop((0, 0, UNIT, UNIT))
        preview.paste(db_image, (db['x'] * UNIT, db['y'] * UNIT), db_image)
        for d in db['affectedTiles']:
            preview_draw.line((db['x'] * UNIT + UNIT/2 , db['y'] * UNIT + UNIT/2, 
                            (db['x'] + d['relX']) * UNIT + UNIT/2, (db['y'] + d['relY']) * UNIT + UNIT/2), 
                            fill='black', width=2)
        tr = db['triggerRange']
        preview_draw.ellipse(((db['x'] - tr) * UNIT + UNIT/2, (db['y'] - tr) * UNIT + UNIT/2,
                        (db['x'] + tr) * UNIT + UNIT/2, (db['y'] + tr) * UNIT + UNIT/2), 
                        fill=None, outline='green', width=3)

    # player
    plr_image = player.crop((0, 0, UNIT, UNIT))
    preview.paste(plr_image, (level['player']['x'] * UNIT, level['player']['y'] * UNIT), plr_image)


    preview.save(f'out\\preview\\stage{i}-preview.png')
