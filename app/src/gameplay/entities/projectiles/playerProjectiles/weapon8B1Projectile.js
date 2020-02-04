"use strict";
class Weapon8B1Projectile extends _DamagingProjectile {

    // ==================== constructor ====================
    constructor(parentEntity, direction, x, y){
        // super constructor
        super(parentEntity, direction, x, y);

        this.speed = 0.16;
        this.minDmg = 8;
        this.maxDmg = 12;
        this.duration = 100;
        this.accuracy = 99;
        
        this.tileX = 0;
        this.tileY = 3;
        
        this.collisionSize = 0.2;
        this.displaySize = 0.6;
        this.collidesMonster = true;
    }

    animate(){
        
    }

    _onCollisionWithMonster(m){
        super._onCollisionWithMonster(m);
        m.applyPushback(this.direction, 0.03, 30);
    }

    _onExpire(){
        super._onExpire();
        ParticleSpawner.createExplosion(CyanSparkParticle, this.x, this.y, Util.randInt(3, 7));
    }

}