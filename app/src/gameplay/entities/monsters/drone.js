"use strict";
class Drone extends _Monster {

    constructor(){
        super();
        this.tileX = Util.randInt(0, 3);
        this.tileY = 1;
        this.maxHp = 25;
        this.hp = 25;
        this.defence = 10;
        this.speed = 0.03;
        this.bulletAttack = new DroneBulletAttack(this);
    }

    _onDamaged(d){
        super._onDamaged(d);
        ParticleSpawner.createExplosion(ScrapParticle, this.x, this.y, Util.randInt(0, d/3));
    }

    _onExpire(){
        super._onExpire();
        ParticleSpawner.createExplosion(ScrapParticle, this.x, this.y, Util.randInt(10, 30));
    }

    _doExist(thisEntity){
        var p = StageManager.currentStage.player;
        var dir = thisEntity.getDirectionToPoint(p.x, p.y);
        var dist = thisEntity.getDistanceToPoint(p.x, p.y);
        if(dist < 8) {
            thisEntity.bulletAttack.execute();
        }
        if(dist > 3) {
            thisEntity.travel(dir);
        }
        thisEntity.turn(dir);
        thisEntity.checkForInWall();
    }
}