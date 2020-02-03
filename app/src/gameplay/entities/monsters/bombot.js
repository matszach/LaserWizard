"use strict";
class Bombot extends _Monster {

    constructor(){
        super();
        this.tileX = Util.randInt(0, 3);
        this.tileY = 6;
        this.maxHp = Util.randInt(10, 15);
        this.displaySize = Util.randFloat(0.75, 0.85);
        this.defence = 20;
        this.speed = Util.randFloat(0.038, 0.042);
        this.selfDestruct = new BombotExplosion(this);
    }

    _onDamaged(d){
        super._onDamaged(d);
        ParticleSpawner.createExplosion(ScrapParticle, this.x, this.y, Util.randInt(0, d/3));
    }

    _onExpire(){
        super._onExpire();
        ParticleSpawner.createExplosion(ScrapParticle, this.x, this.y, Util.randInt(5, 15));
        this.selfDestruct.execute();
    }

    _doExist(thisEntity){
        var p = StageManager.currentStage.player;
        var dir = thisEntity.getDirectionToPoint(p.x, p.y);
        var dist = thisEntity.getDistanceToPoint(p.x, p.y);
        if(dist < 1) {
           thisEntity.expire();
        }
        thisEntity.travel(dir);
        thisEntity.turn(dir);
        thisEntity.checkForInWall();
        thisEntity.doCheckCollisions();
    }
}