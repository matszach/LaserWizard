"use strict";
class MazeLordFireBreathProjectile extends _DamagingProjectile {

    constructor(parentEntity, direction, x, y){
        super(parentEntity, direction, x, y);

        this.speed = 0.10;
        this.minDmg = 3;
        this.maxDmg = 5;
        this.duration = 60;
        this.accuracy = 90;
    
        this.tileX = Util.randInt(4, 7);
        this.tileY = 5;
        
        this.collisionSize = Util.randFloat(1.1, 1.3);
        this.displaySize = this.collisionSize * 0.7;
        this.collidesPlayer = true;
    }

    _onExpire(){
        super._onExpire();
    }


    _onCollisionWithPlayer(p){
        if(Util.chance(0.5)){
            p.takeDmg(this.calculateDamage());
            ParticleSpawner.createExplosion(LastingSmokeParticle, this.x, this.y, Util.randInt(1, 3));
        }
    }

}