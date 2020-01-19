"use strict";
class Weapon4R3Projectile extends _DamagingProjectile {

    // ==================== constructor ====================
    constructor(parentEntity, direction, x, y){
        // super constructor
        super(parentEntity, direction, x, y);

        this.speed = Util.randFloat(0.12, 0.16);
        this.minDmg = 1;
        this.maxDmg = 3;
        this.duration = Util.randInt(40, 80);
        this.accuracy = 92;
        
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
        ParticleSpawner.createExplosion(RedSparkParticle,  this.x, this.y, Util.randInt(3, 5));
    }

}