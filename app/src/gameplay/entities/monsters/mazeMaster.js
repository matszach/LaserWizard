"use strict";
class MazeMaster extends _Monster {

    constructor(){
        super();
        this.tileX = 9;
        this.tileY = 0;
        this.maxHp = Util.randInt(320, 350);
        this.displaySize = 2.5;
        this.defence = 50;
        this.speed = 0.030;
        this.opactity = 1;

        this.stomp = new MazeMasterStomp(this);
        this.dash = new GenericMonsterDash(this, 0.1, 50, 5000);
        this.fireBreath = new MazeLordFireBreathAttack(this);

    }

    _onDamaged(d){
        super._onDamaged(d);
        ParticleSpawner.createExplosion(BloodParticle, this.x, this.y, Util.randInt(1, d/2));
    }

    _onExpire(){
        super._onExpire();
        ParticleSpawner.createExplosion(BloodParticle, this.x, this.y, Util.randInt(80, 100));

        // drops key
        var key = ItemFactory.getItem(15, this.x, this.y);
        StageManager.currentStage.items.push(key);
        key.awaken();
    }

    _doExist(thisEntity){
        var p = StageManager.currentStage.player;
        var dir = thisEntity.getDirectionToPoint(p.x, p.y);
        var dist = thisEntity.getDistanceToPoint(p.x, p.y);
        
        if(dist > 3) {
            thisEntity.dash.execute(dir + Util.randFloat(-10, 10));
        }    

        if(dist < 4 && thisEntity.hp / thisEntity.maxHp < 0.75) {
            thisEntity.fireBreath.execute();
        }

        if(dist < 2.5) {
            thisEntity.stomp.execute();
        }

        if(dist > 1) {
            thisEntity.travel(dir);
        }

        thisEntity.turn(dir);
        thisEntity.checkForInWall();
        thisEntity.doCheckCollisions();
    }

}
