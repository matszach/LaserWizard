"use strict";
class Weapon3R2Projectile extends _DamagingProjectile {

    // ==================== constructor ====================
    constructor(parentEntity, direction, x, y){
        // super constructor
        super(parentEntity, direction, x, y);

        this.speed = 0.21;
        this.minDmg = 12;
        this.maxDmg = 18;
        this.duration = 120;
        this.accuracy = 100;
        
        this.tileX = 4;
        this.tileY = 1;
        
        this.collisionSize = 0.3;
        this.displaySize = 0.5;
        this.collidesMonster = true;
    }

    animate(){
        
    }

    _onExpire(){
        super._onExpire();
        ParticleSpawner.createExplosion(RedSparkParticle,  this.x, this.y, Util.randInt(8, 16));
    }

}