"use strict";
class ZombieBileProjectile extends _DamagingProjectile {

    constructor(parentEntity, direction, x, y){
        super(parentEntity, direction, x, y);

        this.speed = 0.06;
        this.minDmg = 2;
        this.maxDmg = 5;
        this.duration = 40;
        this.accuracy = 80;
        
        this.tileX = Util.randInt(0, 3);
        this.tileY = 4;
        
        this.collisionSize = 0.1;
        this.displaySize = 0.4;
        this.collidesPlayer = true;
    }
}