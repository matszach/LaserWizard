"use strict";
class Drone extends _Monster {

    constructor(){
        super();
        this.tileX = 0;
        this.tileY = 1;
        this.maxHp = 25;
        this.hp = 25;
        this.defence = 10;
        this.speed = 0.03;
    }

    _onDamaged(d){
        super._onDamaged(d);
        ParticleSpawner.createExplosion(ScrapParticle, this.x, this.y, Util.randInt(0, d/3));
    }

    _onExpire(){
        super._onExpire();
        ParticleSpawner.createExplosion(ScrapParticle, this.x, this.y, Util.randInt(10, 30));
    }

}