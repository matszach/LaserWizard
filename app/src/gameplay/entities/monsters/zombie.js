class Zombie extends _Monster {

    constructor(){
        super();
        this.tileX = 0;
        this.tileY = 0;
        this.maxHp = 20;
        this.hp = 20;
        this.defence = 0;
        this.speed = 0.025;
    }

    _onDamaged(d){
        super._onDamaged(d);
        var numberOfProjectiles = d * Math.random() / 2;
        for(var i = 0; i < numberOfProjectiles; i++){
            ParticleSpawner.spawn(BloodParticle, this.x, this.y);
        }
    }

    _onExpire(){
        super._onExpire();
        var numberOfProjectiles = 15 + 15 * Math.random();
        for(var i = 0; i < numberOfProjectiles; i++){
            ParticleSpawner.spawn(BloodParticle, this.x, this.y);
        }
    }

}