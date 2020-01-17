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
        var numberOfProjectiles = d * Math.random() / 3;
        for(var i = 0; i < numberOfProjectiles; i++){
            ParticleSpawner.spawn(ScrapParticle, this.x, this.y);
        }
    }

    _onExpire(){
        super._onExpire();
        var numberOfBloodProjectiles = 10 + 10 * Math.random();
        for(var i = 0; i < numberOfBloodProjectiles; i++){
            ParticleSpawner.spawn(ScrapParticle, this.x, this.y);
        }
        
    }

}