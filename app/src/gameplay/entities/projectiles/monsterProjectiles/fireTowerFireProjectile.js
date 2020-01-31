"use strict";
class FireTowerFireProjectile extends _DamagingProjectile {

    constructor(parentEntity, direction, x, y){
        super(parentEntity, direction, x, y);

        this.speed = Util.randFloat(0.05, 0.06);
        this.minDmg = 3;
        this.maxDmg = 6;
        this.duration = Util.randInt(50, 70);
        this.accuracy = 95;
    
        this.tileX = Util.randInt(4, 7);
        this.tileY = 5;
        
        this.collisionSize = Util.randFloat(0.5, 0.7);
        this.displaySize = this.collisionSize * 0.9;
        this.collidesPlayer = true;
    }

    _onExpire(){
        super._onExpire();
        ParticleSpawner.createExplosion(LastingSmoke, this.x, this.y, Util.randInt(0, 1));
    }


    _onCollisionWithPlayer(p){
        p.takeDmg(this.calculateDamage());
        ParticleSpawner.createExplosion(LastingSmoke, this.x, this.y, Util.randInt(2, 5));
    }

}