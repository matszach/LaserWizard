"use strict";
class Weapon4R3Projectile extends _DamagingProjectile {

    // ==================== constructor ====================
    constructor(parentEntity, direction, x, y){
        // super constructor
        super(parentEntity, direction, x, y);

        this.speed = Util.randFloat(0.12, 0.16);
        this.minDmg = 1;
        this.maxDmg = 3;
        this.duration = Util.randInt(50, 70);
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
        var numberOfProjectiles = Util.randInt(1, 2);
        for(var i = 0; i < numberOfProjectiles; i++){
            ParticleSpawner.spawn(RedSparkParticle,  this.x, this.y);
        }
    }

}