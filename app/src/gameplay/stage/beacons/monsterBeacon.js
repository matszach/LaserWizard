"use strict";
class MonsterBeacon extends _Beacon{
    
    // ===== fields =====
    monsters = [];


    // ===== constructors =====
    constructor(x, y, range){
        super(x, y, range)
    }
    
    // ===== public =====
    addMonster(mId, mX, mY){
        this.monsters.push({
            id: mId,
            x: mX,
            y: mY
        });
    }

    _fire(){
        this.monsters.forEach(m => {
            var monster = MonsterFactory.getMonster(m.id, m.x, m.y);
            StageManager.currentStage.monsters.push(monster);
            monster.awaken();
        });
    }

}