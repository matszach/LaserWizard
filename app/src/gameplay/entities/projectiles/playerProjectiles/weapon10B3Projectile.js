"use strict";
class Weapon10B3Projectile extends _DamagingProjectile {

    // ==================== constructor ====================
    constructor(parentEntity, direction, x, y){
        // super constructor
        super(parentEntity, direction, x, y);

        this.speed = 0.06;
        this.minDmg = 3;
        this.maxDmg = 7;
        this.duration = 110;
        this.accuracy = 98;
        
        this.tileX = 8;
        this.tileY = 3;
        
        this.collisionSize = 1.0;
        this.displaySize = 0.6;
        this.collidesMonster = true;
    }

    animate(){
        this.rotate(5);
        ParticleSpawner.createExplosion(CyanSparkParticle, this.x, this.y, Util.randInt(1, 2));
    }

    _onCollisionWithMonster(m){
        // this one does not expire on collision WITH MONSTER
        m.takeDmg(this.calculateDamage());
        ParticleSpawner.createExplosion(CyanSparkParticle, this.x, this.y, Util.randInt(2, 5));
    }

    _onExpire(){
        super._onExpire();
        ParticleSpawner.createExplosion(CyanSparkParticle, this.x, this.y, Util.randInt(50, 100));
    }

}