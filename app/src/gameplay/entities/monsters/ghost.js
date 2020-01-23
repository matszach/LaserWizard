"use strict";
class Ghost extends _Monster {

    constructor(){
        super();
        this.tileX = Util.randInt(0, 3);
        this.tileY = 2;
        this.maxHp = Util.randInt(15, 20);
        this.displaySize = Util.randFloat(0.8, 1.0);
        this.defence = 35;
        this.speed = 0.04;
        this.opacity = 0.6;
        this.drainAttack = new GhostDrainAttack(this);
    }

    _onDamaged(d){
        super._onDamaged(d);
        ParticleSpawner.createExplosion(RedSparkParticle, this.x, this.y, Util.randInt(1, 1/d));
    }

    _onExpire(){
        super._onExpire();
        ParticleSpawner.createExplosion(RedSparkParticle, this.x, this.y, Util.randInt(15, 30));

    }

    _doExist(thisEntity){
        var p = StageManager.currentStage.player;
        var dir = thisEntity.getDirectionToPoint(p.x, p.y);
        var dist = thisEntity.getDistanceToPoint(p.x, p.y);
        if(dist < 5) {
            thisEntity.drainAttack.execute();
        }
        if(dist > 0.75) {
            thisEntity.travel(dir);
        }
        thisEntity.turn(dir);
    }

}
