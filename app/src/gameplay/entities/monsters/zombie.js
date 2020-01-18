"use strict";
class Zombie extends _Monster {

    constructor(){
        super();
        this.tileX = Util.randInt(0, 7);
        this.tileY = 0;
        this.maxHp = 20;
        this.hp = 20;
        this.defence = 0;
        this.speed = 0.025;
    }

    _onDamaged(d){
        super._onDamaged(d);
        ParticleSpawner.createExplosion(BloodParticle, this.x, this.y, Util.randInt(1, 1/d));
    }

    _onExpire(){
        super._onExpire();
        ParticleSpawner.createExplosion(ZombieGutsParticle, this.x, this.y, Util.randInt(5, 10));
        ParticleSpawner.createExplosion(BloodParticle, this.x, this.y, Util.randInt(10, 20));
        
    }

}