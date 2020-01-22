"use strict";
class Weapon9B2Projectile extends _DamagingProjectile {

    // ==================== constructor ====================
    constructor(parentEntity, direction, x, y){
        // super constructor
        super(parentEntity, direction, x, y);

        this.speed = 0.15;
        this.minDmg = 2;
        this.maxDmg = 5;
        this.duration = 100;
        this.accuracy = 97;
        
        this.tileX = 4;
        this.tileY = 3;
        
        this.collisionSize = 0.1;
        this.displaySize = 0.4;
        this.collidesMonster = true;
    }

    animate(){
        
    }

    _onExpire(){
        super._onExpire();
        ParticleSpawner.createExplosion(CyanSparkParticle, this.x, this.y, Util.randInt(1, 2));
    }

}