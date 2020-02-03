"use strict";
class Weapon4R3Projectile extends _DamagingProjectile {

    // ==================== constructor ====================
    constructor(parentEntity, direction, x, y){
        // super constructor
        super(parentEntity, direction, x, y);

        this.speed = Util.randFloat(0.12, 0.16);
        this.minDmg = 2;
        this.maxDmg = 4;
        this.duration = Util.randInt(40, 50);
        this.accuracy = 94;
        
        this.tileX = 8;
        this.tileY = 1;
        
        this.collisionSize = 0.1;
        this.displaySize = 0.2;
        this.collidesMonster = true;
    }

    animate(){
        
    }

    _onExpire(){
        super._onExpire();
        ParticleSpawner.createExplosion(RedSparkParticle,  this.x, this.y, Util.randInt(2, 4));
    }

}