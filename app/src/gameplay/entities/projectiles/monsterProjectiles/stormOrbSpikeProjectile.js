"use strict";
class StormOrbSpikeProjectile extends _DamagingProjectile {

    constructor(parentEntity, direction, x, y){
        super(parentEntity, direction, x, y);

        this.speed = 0.12
        this.minDmg = 10;
        this.maxDmg = 15;
        this.duration = Util.randInt(70, 90);
        this.accuracy = 97;
    
        this.tileX = 7;
        this.tileY = 4;
        
        this.collisionSize = 0.2;
        this.displaySize = 0.6;
        this.collidesPlayer = true;
    }

    _onExpire(){
        super._onExpire();
        ParticleSpawner.createExplosion(CyanSparkParticle,  this.x, this.y, Util.randInt(5, 10));
    }

}