"use strict";
class Zombie extends _Monster {

    constructor(){
        super();
        this.tileX = Util.randInt(0, 3);
        this.tileY = 0;
        this.maxHp = 20;
        this.hp = 20;
        this.defence = 0;
        this.speed = 0.025;
    }

    _onDamaged(d){
        super._onDamaged(d);
        var numberOfProjectiles = Util.randInt(1, d/2);
        for(var i = 0; i < numberOfProjectiles; i++){
            ParticleSpawner.spawn(BloodParticle, this.x, this.y);
        }
    }

    _onExpire(){
        super._onExpire();
        var numberOfGutsProjectiles = Util.randInt(5, 10);
        for(var i = 0; i < numberOfGutsProjectiles; i++){
            ParticleSpawner.spawn(ZombieGutsParticle, this.x, this.y);
        }
        var numberOfBloodProjectiles = Util.randInt(10, 20);
        for(var i = 0; i < numberOfBloodProjectiles; i++){
            ParticleSpawner.spawn(BloodParticle, this.x, this.y);
        }
        
    }

}