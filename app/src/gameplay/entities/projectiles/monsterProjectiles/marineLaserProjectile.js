"use strict";
class MarineLaserProjectile extends _DamagingProjectile {

    constructor(parentEntity, direction, x, y){
        super(parentEntity, direction, x, y);

        this.speed = 0.12
        this.minDmg = 3;
        this.maxDmg = 5;
        this.duration = Util.randInt(70, 90);
        this.accuracy = 96;
    
        this.tileX = 0;
        this.tileY = 1;
        
        this.collisionSize = 0.1;
        this.displaySize = 0.4;
        this.collidesPlayer = true;
    }

    _onExpire(){
        super._onExpire();
        ParticleSpawner.createExplosion(RedSparkParticle,  this.x, this.y, Util.randInt(1, 3));
    }

}