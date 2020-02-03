"use strict";
class DartTowerProjectile extends _DamagingProjectile {

    constructor(parentEntity, direction, x, y){
        super(parentEntity, direction, x, y);

        this.speed = 0.10
        this.minDmg = 4;
        this.maxDmg = 6;
        this.duration = 90;
        this.accuracy = 95;
    
        this.tileX = 6;
        this.tileY = 4;
        
        this.collisionSize = 0.2;
        this.displaySize = 0.3;
        this.collidesPlayer = true;
    }

    _onExpire(){
        super._onExpire();
        ParticleSpawner.createExplosion(YellowSparkParticle,  this.x, this.y, Util.randInt(1, 3));
    }

}