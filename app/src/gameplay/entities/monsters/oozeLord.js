"use strict";
class OozeLord extends _Monster {

    constructor(){
        super();
        this.tileX = 8;
        this.tileY = 0;
        this.maxHp = Util.randInt(200, 220);
        this.displaySize = 3;
        this.defence = 25;
        this.speed = 0.015;
        this.opacity = 0.8;

        this.bileAttack = new OozeLordBileAttack(this);
        this.death = new OozeLordDeath(this);
        this.damaged = new OozeLordDamaged(this);
    }

    _onDamaged(d){
        super._onDamaged(d);
        this.damaged.execute();
        this.displaySize = 1 + 2 * this.hp / this.maxHp;
        this.collisionSize = this.displaySize * 0.95;
        this.speed = 0.015 + 0.03 * (1 - this.hp / this.maxHp);
    }

    _onExpire(){
        super._onExpire();
        this.death.execute();
        ParticleSpawner.createExplosion(ZombieGutsParticle, this.x, this.y, Util.randInt(15, 30));
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
        thisEntity.doCheckCollisions();
    }

}
