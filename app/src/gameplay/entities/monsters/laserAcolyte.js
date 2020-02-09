"use strict";
class LaserAcolyte extends _Monster {

    constructor(){
        super();
        this.tileX = Util.randInt(0, 3);
        this.tileY = 5;
        this.maxHp = Util.randInt(30, 40);
        this.displaySize = Util.randFloat(0.8, 0.9);
        this.defence = 20;
        this.speed = Util.randFloat(0.025, 0.028);

        this.dash = new GenericMonsterDash(this, 0.3, 12, 500);
        this.orbAttack = new LaserAcoliteAttack(this);
    }

    _onDamaged(d){
        super._onDamaged(d);
        ParticleSpawner.createExplosion(CyanSparkParticle, this.x, this.y, Util.randInt(0, d/2));
        this.dash.execute(this.direction + Util.randFloat(-110, 110));
    }

    _onExpire(){
        super._onExpire();
        ParticleSpawner.createExplosion(CyanSparkParticle, this.x, this.y, Util.randInt(20, 30));
    }

    _doExist(thisEntity){
        var p = StageManager.currentStage.player;
        var dir = thisEntity.getDirectionToPoint(p.x, p.y);
        var dist = thisEntity.getDistanceToPoint(p.x, p.y);

        if(dist < 7) {
            thisEntity.orbAttack.execute();
        }

        if(dist > 4) {
            thisEntity.travel(dir);
        } 

        thisEntity.turn(dir);
        thisEntity.checkForInWall();
        thisEntity.doCheckCollisions();
    }

}
