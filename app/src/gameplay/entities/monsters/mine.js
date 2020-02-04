"use strict";
class Mine extends _Monster {

    constructor(){
        super();
        this.tileX = Util.randInt(0, 3);
        this.tileY = 7;
        this.maxHp = Util.randInt(20, 25);
        this.displaySize = Util.randFloat(0.6, 0.7);
        this.defence = 20;
        this.speed = 0;
        this.opacity = 0.2

        this.explosion = new MineDelayedExplosion(this);
    }

    _onDamaged(d){
        super._onDamaged(d);
        ParticleSpawner.createExplosion(ScrapParticle, this.x, this.y, Util.randInt(0, d/3));
    }

    _onExpire(){
        super._onExpire();
        ParticleSpawner.createExplosion(ScrapParticle, this.x, this.y, Util.randInt(5, 15));
    }

    _doExist(thisEntity){
        var p = StageManager.currentStage.player;
        var dist = thisEntity.getDistanceToPoint(p.x, p.y);
        if(dist < 1.5) {
            thisEntity.explosion.execute();
        }
        thisEntity.checkForInWall();
        thisEntity.doCheckCollisions();
    }
}