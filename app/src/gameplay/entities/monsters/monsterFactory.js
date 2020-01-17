const MonsterFactory = {

    _monsterTypeDict : {
        0 : Zombie,
        1 : Drone,

        default : Zombie
    },

    getAttributeMultiplier(){
        return 0.9 + Math.random() * 0.2;
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
        monster.hp *= this.getAttributeMultiplier();
        monster.speed *= this.getAttributeMultiplier();
        monster.displaySize *= this.getAttributeMultiplier();
        return monster;
    }

}