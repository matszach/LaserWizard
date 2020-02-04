"use strict";
class StormOrb extends _Monster {

    constructor(){
        super();
        this.tileX = Util.randInt(4, 7);
        this.tileY = 2;
        this.maxHp = Util.randInt(30, 40);
        this.displaySize = Util.randFloat(0.9, 1.1);
        this.defence = 35;
        this.speed = Util.randFloat(0.015, 0.017);
        this.opacity = 0.8;

        this.dash = new GenericMonsterDash(this, 0.2, 12, 1200);
        this.spikeAttack = new StormOrbSpikeAttack(this);
    }

    _onDamaged(d){
        super._onDamaged(d);
        ParticleSpawner.createExplosion(CyanSparkParticle, this.x, this.y, Util.randInt(0, d/2));

    }

    _onExpire(){
        super._onExpire();
        ParticleSpawner.createExplosion(CyanSparkParticle, this.x, this.y, Util.randInt(20, 30));
    }

    _doExist(thisEntity){
        var p = StageManager.currentStage.player;
        var dir = thisEntity.getDirectionToPoint(p.x, p.y);
        var dist = thisEntity.getDistanceToPoint(p.x, p.y);

        if(Util.chance(0.05)){
            ParticleSpawner.createExplosion(CyanSparkParticle, thisEntity.x, thisEntity.y, Util.randInt(2, 5));
        }
        
        if(dist < 9) {
            thisEntity.dash.execute(dir + Util.randFloat(-110, 110));
            thisEntity.spikeAttack.execute();
        }

        if(dist > 4) {
            thisEntity.travel(dir);
        } 

        thisEntity.turn(dir);
        thisEntity.checkForInWall();
        thisEntity.doCheckCollisions();
    }

}
