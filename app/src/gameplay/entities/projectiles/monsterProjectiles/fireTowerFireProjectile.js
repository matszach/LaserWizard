"use strict";
class FireTowerFireProjectile extends _DamagingProjectile {

    constructor(parentEntity, direction, x, y){
        super(parentEntity, direction, x, y);

        this.speed = 0.06;
        this.minDmg = 2;
        this.maxDmg = 3;
        this.duration = 60;
        this.accuracy = 97;
    
        this.tileX = Util.randInt(4, 7);
        this.tileY = 5;
        
        this.collisionSize = Util.randFloat(0.7, 0.8);
        this.displaySize = this.collisionSize * 0.7;
        this.collidesPlayer = true;
    }

    _onExpire(){
        super._onExpire();
    }


    _onCollisionWithPlayer(p){
        if(Util.chance(0.5)){
            p.takeDmg(this.calculateDamage());
            ParticleSpawner.createExplosion(LastingSmoke, this.x, this.y, Util.randInt(1, 3));
        }
    }

}