"use strict";
class DartTower extends _Monster {

    constructor(){
        super();
        this.tileX = Util.randInt(8, 11);
        this.tileY = 3;
        this.maxHp = Util.randInt(120, 140);
        this.displaySize = Util.randFloat(1.2, 1.4);
        this.defence = 50;
        this.speed = 0;

        this.attack = new DartTowerAttack(this);

        var p = StageManager.currentStage.player;
        this.direction = this.getDirectionToPoint(p.x, p.y); // starts as facing the player
    }



    _onDamaged(d){
        super._onDamaged(d);
        ParticleSpawner.createExplosion(ScrapParticle, this.x, this.y, Util.randInt(0, d/6));
        ParticleSpawner.createExplosion(ChestSplinterParticle, this.x, this.y, Util.randInt(0, d/6));
    }

    _onExpire(){
        super._onExpire();
        ParticleSpawner.createExplosion(ScrapParticle, this.x, this.y, Util.randInt(5, 15));
        ParticleSpawner.createExplosion(ChestSplinterParticle, this.x, this.y, Util.randInt(5, 15));
    }

    _doExist(thisEntity){
        var p = StageManager.currentStage.player;
        var dir = thisEntity.getDirectionToPoint(p.x, p.y);
        var dist = thisEntity.getDistanceToPoint(p.x, p.y);
        if(dist < 9) {
            thisEntity.direction = Util.easeTo(thisEntity.direction % 360, dir % 360, 0.33);
            if(Math.abs(thisEntity.direction % 360 - dir % 360) < 10) {
                thisEntity.attack.execute();
            }
        }
        thisEntity.doCheckCollisions();
    }
}