"use strict";
const MonsterFactory = {

    _monsterTypeDict : {
        0 : Zombie,
        1 : Drone,
        2 : Ghost,
        3 : Skeleton,

        default : Zombie
    },

    /**
     * @param {number} id - monster id 
     * @param {number} x - monster x position
     * @param {number} y - monster y position
     */
    getMonster(id, x, y){
        id = Util.randInt(0, 3);
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