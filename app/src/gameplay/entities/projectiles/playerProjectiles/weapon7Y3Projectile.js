"use strict";
class Weapon7Y3Projectile extends _DamagingProjectile {

    // ==================== constructor ====================
    constructor(parentEntity, direction, x, y){
        // super constructor
        super(parentEntity, direction, x, y);

        this.speed = 0.15;
        this.minDmg = 30;
        this.maxDmg = 40;
        this.duration = 100;
        this.accuracy = 99;
        
        this.tileX = 8;
        this.tileY = 2;
        
        this.collisionSize = 0.2;
        this.displaySize = 0.7;
        this.collidesMonster = true;
    }

    animate(){
        ParticleSpawner.createExplosion(RocketSmokeParticle, this.x, this.y, 1);
    }

    _onExpire(){
        super._onExpire();
        ParticleSpawner.createExplosion(YellowSparkParticle,  this.x, this.y, Util.randInt(80, 160));
        ParticleSpawner.createExplosion(LastingSmoke,  this.x, this.y, Util.randInt(20, 30));
    }

}