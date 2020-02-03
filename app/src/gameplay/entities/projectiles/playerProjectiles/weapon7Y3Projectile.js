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

    _onCollisionWithMonster(m){
        this.expire();
    }

    animate(){
        if(Util.chance(0.5)){
            ParticleSpawner.createExplosion(RocketSmokeParticle, this.x, this.y, 1);
        }
    }

    _onExpire(){
        super._onExpire();
        ParticleSpawner.createExplosion(FireParticle,  this.x, this.y, Util.randInt(30, 40));
        ParticleSpawner.createExplosion(LastingSmokeParticle,  this.x, this.y, Util.randInt(20, 30));
        
        StageManager.currentStage.monsters.forEach(m => {
            if(!m.expired && this.getDistanceToPoint(m.x, m.y) < 2.5){
                m.takeDmg(this.calculateDamage());
            }
        });
    }

}