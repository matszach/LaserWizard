"use strict";
class DroneBulletProjectile extends _DamagingProjectile {

    constructor(parentEntity, direction, x, y){
        super(parentEntity, direction, x, y);

        this.speed = 0.10
        this.minDmg = 3;
        this.maxDmg = 6;
        this.duration = Util.randInt(70, 90);
        this.accuracy = 97;
    
        this.tileX = 4;
        this.tileY = 4;
        
        this.collisionSize = 0.1;
        this.displaySize = 0.3;
        this.collidesPlayer = true;
    }

    _onExpire(){
        super._onExpire();
        ParticleSpawner.createExplosion(YellowSparkParticle,  this.x, this.y, Util.randInt(2, 5));
    }

}