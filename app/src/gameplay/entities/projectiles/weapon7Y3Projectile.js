"use strict";
class Weapon7Y3Projectile extends _DamagingProjectile {

    // ==================== constructor ====================
    constructor(parentEntity, direction, x, y){
        // super constructor
        super(parentEntity, direction, x, y);

        this.speed = 0.12;
        this.minDmg = 20;
        this.maxDmg = 30;
        this.duration = 100;
        this.accuracy = 99;
        
        this.tileX = 8;
        this.tileY = 2;
        
        this.collisionSize = 0.2;
        this.displaySize = 0.7;
        this.collidesMonster = true;
    }

    animate(){
        
    }

    _onExpire(){
        super._onExpire();
        ParticleSpawner.createExplosion(YellowSparkParticle,  this.x, this.y, Util.randInt(200, 300));
    }

}