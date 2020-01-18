"use strict";
class Weapon6Y2Projectile extends _DamagingProjectile {

    // ==================== constructor ====================
    constructor(parentEntity, direction, x, y){
        // super constructor
        super(parentEntity, direction, x, y);

        this.speed = 0.14;
        this.minDmg = 12;
        this.maxDmg = 16;
        this.duration = 90;
        this.accuracy = 99.5;
        
        this.tileX = 4;
        this.tileY = 2;
        
        this.collisionSize = 0.1;
        this.displaySize = 0.4;
        this.collidesMonster = true;
    }

    animate(){
        
    }

    _onExpire(){
        super._onExpire();
        var numberOfProjectiles = Util.randInt(2, 8);
        for(var i = 0; i < numberOfProjectiles; i++){
            ParticleSpawner.spawn(YellowSparkParticle,  this.x, this.y);
        }
    }

}