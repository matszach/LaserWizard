"use strict";
class FireTower extends _Monster {

    constructor(){
        super();
        this.tileX = Util.randInt(8, 11);
        this.tileY = 4;
        this.maxHp = Util.randInt(150, 170);
        this.displaySize = Util.randFloat(1.2, 1.4);
        this.defence = 50;
        this.speed = 0;
        this.flamethrower = new FireTowerFlamethrowerAttack(this);
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
        thisEntity.rotate(0.333);
        if(dist < 9) {
            thisEntity.flamethrower.execute();
        }
        thisEntity.doCheckCollisions();
    }
}