"use strict";
const MonsterFactory = {

    _monsterTypeDict : {
        0 : Zombie,
        1 : Drone,
        2 : Ghost,
        3 : Skeleton,
        4 : GelCube,
        5 : OozeLord,
        6 : RedChest,
        7 : YellowChest,
        8 : BlueChest, 
        9 : Bombot,
        10: FireTower,
        11: DartTower,
        12: Mine,
        13: StormOrb,
        14: LaserAcolyte,
        15: MazeMaster,
        16: Marine,

        default : Zombie
    },

    /**
     * @param {number} id - monster id 
     * @param {number} x - monster x position
     * @param {number} y - monster y position
     */
    getMonster(id, x, y){
        
        // randomize monster if testMode
        if(SaveStateHandler.get().testMode){
            id = Util.randInt(0, 16);
        }

        var monsterClass = this._monsterTypeDict[id] ? this._monsterTypeDict[id] : this._monsterTypeDict.default;
        var monster = new monsterClass();
        if(x && y){
            monster.x = x;
            monster.y = y;   
        }
        monster.hp = monster.maxHp;
        monster.collisionSize = 0.95 * monster.displaySize;
        return monster;
    }

}