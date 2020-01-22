"use strict";
class SkeletonRocketProjectile extends _DamagingProjectile {

    constructor(parentEntity, direction, x, y){
        super(parentEntity, direction, x, y);

        this.speed = 0.11
        this.minDmg = 8;
        this.maxDmg = 12;
        this.duration = Util.randInt(90, 110);
        this.accuracy = 95;
    
        this.tileX = 4;
        this.tileY = 4;
        
        this.collisionSize = 0.15;
        this.displaySize = 0.5;
        this.collidesPlayer = true;
    }

    animate(){
        if(Util.chance(0.5)){
            ParticleSpawner.createExplosion(RocketSmokeParticle, this.x, this.y, 1);
        }

        // home-ing on the player
        var p = StageManager.currentStage.player;
        var dir = this.getDirectionToPoint(p.x, p.y);
        this.turnToDirection(dir, 0.5);
        this.travelDirection = this.direction;
    }

    _onExpire(){
        super._onExpire();
        ParticleSpawner.createExplosion(RedSparkParticle,  this.x, this.y, Util.randInt(2, 5));
    }

}