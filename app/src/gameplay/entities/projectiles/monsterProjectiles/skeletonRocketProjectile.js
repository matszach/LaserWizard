"use strict";
class SkeletonRocketProjectile extends _DamagingProjectile {

    constructor(parentEntity, direction, x, y){
        super(parentEntity, direction, x, y);

        this.speed = 0.14
        this.minDmg = 8;
        this.maxDmg = 12;
        this.duration = Util.randInt(60, 80);
        this.accuracy = 95;
    
        this.tileX = 4;
        this.tileY = 4;
        
        this.collisionSize = 0.15;
        this.displaySize = 0.5;
        this.collidesPlayer = true;
    }

    animate(){
        ParticleSpawner.createExplosion(RocketSmokeParticle, this.x, this.y, 1);
    }

    _onExpire(){
        super._onExpire();
        ParticleSpawner.createExplosion(RedSparkParticle,  this.x, this.y, Util.randInt(2, 5));
    }

}