class _Beacon {
    
    // ===== fields =====
    x = 0;
    y = 0;
    range = 0;
    fired = false;


    // ===== constructors =====
    constructor(x, y, range){
        this.x = x;
        this.y = y;
        this.range = range;
    }
    
    // ===== public =====
    test(){
        if(this._isPlayerInRange()){
            if(!this.fired && this._shoudlFire()){
                this._fire();      
                this.fired = true;  
            }
        }
    }

    // ===== private =====
    _isPlayerInRange(){
        var p = StageManager.currentStage.player;
        var dX = this.x - p.x;
        var dY = this.y - p.y;
        return Math.sqrt(dX * dX + dY * dY) < this.range;
    }

    _shoudlFire(){
        return true; // abstract
    }

    _fire(){
       // abstract
    }

}