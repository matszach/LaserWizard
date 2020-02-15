"use strict";
class Marine extends _Monster {

    constructor(){
        super();
        this.tileX = Util.randInt(4, 7);
        this.tileY = 3;
        this.maxHp = Util.randInt(25, 30);
        this.displaySize = Util.randFloat(1.1, 1.3);
        this.defence = 35;
        this.speed = Util.randFloat(0.033, 0.036);

        this.laserAttack = new MarineLaserAttack(this);
    }

    _onDamaged(d){
        super._onDamaged(d);
        ParticleSpawner.createExplosion(BloodParticle, this.x, this.y, Util.randInt(1, d/3));

    }

    _onExpire(){
        super._onExpire();
        ParticleSpawner.createExplosion(BloodParticle, this.x, this.y, Util.randInt(15, 25));
        
        // drops red ammo
        if (Util.chance(0.75)) {
            var key = ItemFactory.getItem(3, this.x, this.y);
            StageManager.currentStage.items.push(key);
            key.awaken();
        } 
    }

    _doExist(thisEntity){
        var p = StageManager.currentStage.player;
        var dir = thisEntity.getDirectionToPoint(p.x, p.y);
        var dist = thisEntity.getDistanceToPoint(p.x, p.y);
        if(dist < 7) {
            thisEntity.laserAttack.execute();
        }
        if(dist > 4) {
            thisEntity.travel(dir);
        }
        thisEntity.turn(dir);
        thisEntity.checkForInWall();
        thisEntity.doCheckCollisions();
    }
}