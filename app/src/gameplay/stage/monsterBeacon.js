class MonsterBeacon {
    
    // ===== fields =====
    x = 0;
    y = 0;
    range = 0;
    monsters = [];
    fired = false;


    // ===== constructors =====
    constructor(x, y, range){
        this.x = x;
        this.y = y;
        this.range = range;
    }
    
    // ===== public =====
    addMonster(mId, mX, mY){
        this.monsters.push({
            id: mId,
            x: mX,
            y: mY
        });
    }

    test(){
        if(this._isPlayerInRange()){
            this._spawnMonsters();      
            this.fired = true;  
        }
    }

    // ===== private =====
    _isPlayerInRange(){
        var p = StageManager.currentStage.player;
        var dX = this.x - p.x;
        var dY = this.y - p.y;
        return Math.sqrt(dX * dX + dY * dY) < this.range;
    }

    _spawnMonsters(){
        this.monsters.forEach((m) => StageManager.currentStage.monsters.push(m));
    }

}