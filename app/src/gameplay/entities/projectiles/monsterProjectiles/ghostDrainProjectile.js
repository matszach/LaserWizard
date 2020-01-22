"use strict";
class GhostDrainProjectile extends _DamagingProjectile {

    constructor(parentEntity, direction, x, y){
        super(parentEntity, direction, x, y);

        this.speed = 0.11;
        this.minDmg = 5;
        this.maxDmg = 10;
        this.duration = Util.randInt(60, 90);
        this.accuracy = 99;
        
        this.tileX = Util.randInt(8, 11);
        this.tileY = 4;
        
        this.collisionSize = 0.2;
        this.displaySize = 0.5;
        this.collidesPlayer = true;

        this.animationTimer = 0;
    }

    animate(){
        this.rotate(6);

        // TODO delegate this
        if(this.animationTimer == 5){
            this.animationTimer = 0;
            this.tileX ++;
            if(this.tileX == 11){
                this.tileX = 8;
            }
        } 
        this.animationTimer ++;
    }

    _onExpire(){
        super._onExpire();
        ParticleSpawner.createExplosion(YellowSparkParticle,  this.x, this.y, Util.randInt(2, 5));
    }

    _onCollisionWithPlayer(p){
        super._onCollisionWithPlayer(p);
        this.parentEntity.healDmg(Util.randInt(3, 6))
    }
}