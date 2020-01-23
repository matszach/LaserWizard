"use strict";
class OozeLordBileProjectile extends _DamagingProjectile {

    constructor(parentEntity, direction, x, y){
        super(parentEntity, direction, x, y);

        this.speed = Util.randFloat(0.05, 0.07);
        this.minDmg = 2;
        this.maxDmg = 5;
        this.duration = Util.randInt(90, 110);
        this.accuracy = 85;
        
        this.tileX = Util.randInt(0, 3);
        this.tileY = 4;
        
        this.collisionSize = 0.2;
        this.displaySize = 0.6;
        this.collidesPlayer = true;
    }

    _onExpire(){
        super._onExpire();
        ParticleSpawner.createExplosion(YellowSparkParticle,  this.x, this.y, Util.randInt(2, 5));
    }
}