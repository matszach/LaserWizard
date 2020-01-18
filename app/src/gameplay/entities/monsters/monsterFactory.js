"use strict";
const MonsterFactory = {

    _monsterTypeDict : {
        0 : Zombie,
        1 : Drone,

        default : Zombie
    },

    /**
     * @param {number} id - monster id 
     * @param {number} x - monster x position
     * @param {number} y - monster y position
     */
    getMonster(id, x, y){
        var monsterClass = this._monsterTypeDict[id] ? this._monsterTypeDict[id] : this._monsterTypeDict.default;
        var monster = new monsterClass();
        if(x && y){
            monster.x = x;
            monster.y = y;   
        }
        monster.hp *= Util.randFloat(0.8, 1.2);
        monster.speed *= Util.randFloat(0.9, 1.1);
        monster.displaySize *= Util.randFloat(0.9, 1.1);
        return monster;
    }

}