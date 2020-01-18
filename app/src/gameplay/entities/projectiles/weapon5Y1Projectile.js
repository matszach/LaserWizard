"use strict";
class Weapon5Y1Projectile extends _DamagingProjectile {

    // ==================== constructor ====================
    constructor(parentEntity, direction, x, y){
        // super constructor
        super(parentEntity, direction, x, y);

        this.speed = 0.18;
        this.minDmg = 4;
        this.maxDmg = 7;
        this.duration = 90;
        this.accuracy = 98.5;
        
        this.tileX = 0;
        this.tileY = 2;
        
        this.collisionSize = 0.1;
        this.displaySize = 0.4;
        this.collidesMonster = true;
    }

    animate(){
        
    }

    _onExpire(){
        super._onExpire();
        ParticleSpawner.createExplosion(YellowSparkParticle,  this.x, this.y, Util.randInt(2, 5));
    }

}