"use strict";
class ZombieBileProjectile extends _DamagingProjectile {

    constructor(parentEntity, direction, x, y){
        super(parentEntity, direction, x, y);

        this.speed = Util.randFloat(0.05, 0.07);
        this.minDmg = 1;
        this.maxDmg = 3;
        this.duration = Util.randInt(40, 60);
        this.accuracy = 85;
        
        this.tileX = Util.randInt(0, 3);
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