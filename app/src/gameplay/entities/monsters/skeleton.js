"use strict";
class Skeleton extends _Monster {

    constructor(){
        super();
        this.tileX = Util.randInt(0, 3);
        this.tileY = 3;
        this.maxHp = Util.randInt(50, 60);
        this.displaySize = Util.randFloat(1.4, 1.6);
        this.defence = 15;
        this.speed = Util.randFloat(0.018, 0.020);
        this.rocketAttack = new SkeletonRocketAttack(this);
    }

    _onDamaged(d){
        super._onDamaged(d);
        ParticleSpawner.createExplosion(ScrapParticle, this.x, this.y, Util.randInt(0, d/3));
    }

    _onExpire(){
        super._onExpire();
        ParticleSpawner.createExplosion(ScrapParticle, this.x, this.y, Util.randInt(20, 40));
    }

    _doExist(thisEntity){
        var p = StageManager.currentStage.player;
        var dir = thisEntity.getDirectionToPoint(p.x, p.y);
        var dist = thisEntity.getDistanceToPoint(p.x, p.y);
        if(dist < 9) {
            thisEntity.rocketAttack.execute();
        }
        if(dist > 4) {
            thisEntity.travel(dir);
        }
        thisEntity.turn(dir);
        thisEntity.checkForInWall();
        thisEntity.doCheckCollisions();
    }
}