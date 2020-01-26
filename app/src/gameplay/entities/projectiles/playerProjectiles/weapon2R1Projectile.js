"use strict";
class Weapon2R1Projectile extends _DamagingProjectile {

    // ==================== constructor ====================
    constructor(parentEntity, direction, x, y){
        // super constructor
        super(parentEntity, direction, x, y);

        this.speed = 0.16;
        this.minDmg = 3;
        this.maxDmg = 6;
        this.duration = 80;
        this.accuracy = 98;
        
        this.tileX = 0;
        this.tileY = 1;
        
        this.collisionSize = 0.1;
        this.displaySize = 0.4;
        this.collidesMonster = true;
    }

    animate(){
        
    }

    _onExpire(){
        super._onExpire();
        ParticleSpawner.createExplosion(RedSparkParticle,  this.x, this.y, Util.randInt(1, 4));
    }

}