"use strict";
class GelCube extends _Monster {

    constructor(){
        super();
        this.tileX = Util.randInt(0, 3);
        this.tileY = 4;
        this.maxHp = Util.randInt(70, 80);
        this.displaySize = Util.randFloat(2, 2.1);
        this.defence = 0;
        this.opacity = 0.6;
        this.speed = Util.randFloat(0.010, 0.011);


        // TEMP _ ALL MONSTERS AND THE PLAYER SHOULD CHECK COLLISONS WITH EACH OHER TO PREVENT OVERLAP
        this.checksCollisions = true;
        this.collisoonCheckFrequency = 5;
        this.collisionCheckTimer = 0;
        this.collidesPlayer = true;
    }

    _onDamaged(d){
        super._onDamaged(d);
        ParticleSpawner.createExplosion(GelBlobParticle, this.x, this.y, Util.randInt(1, d/2));
    }

    _onExpire(){
        super._onExpire();
        for(var i = 0; i < Util.randInt(2, 3); i++){
            var monster = new GelCubeSmall();
            monster.x = this.x + Util.randFloat(-1, 1);
            monster.y = this.y + Util.randFloat(-1, 1);
            if(!monster._isInWall()){
                StageManager.currentStage.monsters.push(monster);
                monster.awaken();
            }
        }
        ParticleSpawner.createExplosion(GelBlobParticle, this.x, this.y, Util.randInt(20, 30));
    }

    _doExist(thisEntity){
        var p = StageManager.currentStage.player;
        var dir = thisEntity.getDirectionToPoint(p.x, p.y);
        var dist = thisEntity.getDistanceToPoint(p.x, p.y);
        thisEntity.travel(dir);
        thisEntity.turn(dir);
        thisEntity.checkForInWall();
        thisEntity.doCheckCollisions();
    }

    _onCollisionWithPlayer(entity){
        if(Util.chance(0.25)){
            entity.takeDmg(Util.randFloat(6, 10));
        }
    }
}

class GelCubeSmall extends GelCube {

    constructor(){
        super();
        this.maxHp = Util.randInt(30, 40);
        this.hp = this.maxHp;
        this.displaySize = Util.randFloat(1, 1.1);
        this.speed = Util.randFloat(0.012, 0.013);
    }

    _onExpire(){
        for(var i = 0; i < Util.randInt(2, 3); i++){
            var monster = new GelCubeTiny();
            monster.x = this.x + Util.randFloat(-1, 1);
            monster.y = this.y + Util.randFloat(-1, 1);
            if(!monster._isInWall()){
                StageManager.currentStage.monsters.push(monster);
                monster.awaken();
            }
        }
        ParticleSpawner.createExplosion(GelBlobParticle, this.x, this.y, Util.randInt(10, 15));
    }

    _onCollisionWithPlayer(entity){
        if(Util.chance(0.25)){
            entity.takeDmg(Util.randFloat(3, 5));
        }
    }
}

class GelCubeTiny extends GelCube {
    
    constructor(){
        super();
        this.maxHp = Util.randInt(10, 15);
        this.hp = this.maxHp;
        this.displaySize = Util.randFloat(0.5, 0.6);
        this.speed = Util.randFloat(0.015, 0.016);
    }

    _onExpire(){
        ParticleSpawner.createExplosion(GelBlobParticle, this.x, this.y, Util.randInt(3, 6));
    }

    _onCollisionWithPlayer(entity){
        if(Util.chance(0.25)){
            entity.takeDmg(Util.randFloat(1, 3));
        }
    }
}

