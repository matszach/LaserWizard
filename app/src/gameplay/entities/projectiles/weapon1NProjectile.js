"use strict";
class Weapon1NProjectile extends _DamagingProjectile {

    // ==================== constructor ====================
    constructor(parentEntity, direction, x, y){
        // super constructor
        super(parentEntity, direction, x, y);

        this.speed = 0.13;
        this.minDmg = 4;
        this.maxDmg = 6;
        this.duration = 90;
        this.accuracy = 99;
        
        this.tileX = 0;
        this.tileY = 0;
        
        this.collisionSize = 0.1;
        this.displaySize = 0.4;
        this.collidesMonster = true;
    }

    animate(){

    }

    _onExpire(){
        super._onExpire();
        ParticleSpawner.createExplosion(BlueSparkParticle, this.x, this.y, Util.randInt(3, 6));
    }

}