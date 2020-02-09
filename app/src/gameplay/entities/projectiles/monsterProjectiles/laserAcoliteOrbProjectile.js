"use strict";
class LaserAcoliteOrbProjectile extends _DamagingProjectile {

    constructor(parentEntity, direction, x, y){
        super(parentEntity, direction, x, y);

        this.speed = 0.11;
        this.minDmg = 5;
        this.maxDmg = 10;
        this.duration = Util.randInt(60, 90);
        this.accuracy = 99;
        
        this.tileX = Util.randInt(8, 11);
        this.tileY = 5;
        
        this.collisionSize = 0.3;
        this.displaySize = 0.7;
        this.collidesPlayer = true;

        this.animationTimer = 0;
    }

    animate(){
        // TODO delegate this
        if(this.animationTimer == 10){
            this.animationTimer = 0;
            this.tileX ++;
            if(this.tileX == 11){
                this.tileX = 8;
            }
        } 
        this.animationTimer ++;
    }

    _onExpire(){
        super._onExpire();
        ParticleSpawner.createExplosion(MagentaSparkParticle, this.x, this.y, Util.randInt(2, 5));
    }

}