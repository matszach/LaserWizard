"use strict";
class BombotShrapnelProjectile extends _DamagingProjectile {

    constructor(parentEntity, direction, x, y){
        super(parentEntity, direction, x, y);

        this.speed = 0.15
        this.minDmg = 8;
        this.maxDmg = 12;
        this.duration = Util.randInt(15, 20);
        this.accuracy = 90;
    
        this.tileX = 6;
        this.tileY = 4;
        
        this.collisionSize = 0.2;
        this.displaySize = 0.3;
        this.collidesPlayer = true;
    }

    _onExpire(){
        super._onExpire();
    }

}