"use strict";
class Zombie extends _Monster {

    constructor(){
        super();
        this.tileX = Util.randInt(0, 7);
        this.tileY = 0;
        this.maxHp = Util.randInt(20, 25);
        this.displaySize = Util.randFloat(0.9, 1.1);
        this.defence = 0;
        this.speed = Util.randFloat(0.022, 0.028);
        this.bileAttack = new ZombieBileAttack(this);
    }

    _onDamaged(d){
        super._onDamaged(d);
        ParticleSpawner.createExplosion(BloodParticle, this.x, this.y, Util.randInt(1, 1/d));
    }

    _onExpire(){
        super._onExpire();
        ParticleSpawner.createExplosion(ZombieGutsParticle, this.x, this.y, Util.randInt(5, 10));
        ParticleSpawner.createExplosion(BloodParticle, this.x, this.y, Util.randInt(10, 20)); 
    }

    _doExist(thisEntity){
        var p = StageManager.currentStage.player;
        var dir = thisEntity.getDirectionToPoint(p.x, p.y);
        var dist = thisEntity.getDistanceToPoint(p.x, p.y);
        if(dist < 3) {
            thisEntity.bileAttack.execute();
        }
        if(dist > 0.75) {
            thisEntity.travel(dir);
        }
        thisEntity.turn(dir);
        thisEntity.checkForInWall();
        thisEntity.doCheckCollisions();
    }

}
