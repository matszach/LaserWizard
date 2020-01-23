"use strict";
class OozeLord extends _Monster {

    constructor(){
        super();
        this.tileX = 8;
        this.tileY = 0;
        this.maxHp = Util.randInt(200, 220);
        this.displaySize = Util.randFloat(2, 2.2);
        this.defence = 25;
        this.speed = Util.randFloat(0.014, 0.016);
        this.opacity = 0.8;

        this.bileAttack = new OozeLordBileAttack(this);
    }

    _onDamaged(d){
        super._onDamaged(d);
        // ParticleSpawner.createExplosion(BloodParticle, this.x, this.y, Util.randInt(1, 1/d));
    }

    _onExpire(){
        super._onExpire();
        // ParticleSpawner.createExplosion(ZombieGutsParticle, this.x, this.y, Util.randInt(5, 10));
        // ParticleSpawner.createExplosion(BloodParticle, this.x, this.y, Util.randInt(10, 20)); 
    }

    _doExist(thisEntity){
        var p = StageManager.currentStage.player;
        var dir = thisEntity.getDirectionToPoint(p.x, p.y);
        var dist = thisEntity.getDistanceToPoint(p.x, p.y);
        if(dist < 7) {
            thisEntity.bileAttack.execute();
        }
        if(dist > 1) {
            thisEntity.travel(dir);
        }
        thisEntity.turn(dir);
        thisEntity.checkForInWall();
    }

}
