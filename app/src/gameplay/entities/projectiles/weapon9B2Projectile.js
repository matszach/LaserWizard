class Weapon9B2Projectile extends _DamagingProjectile {

    // ==================== constructor ====================
    constructor(parentEntity, direction, x, y){
        // super constructor
        super(parentEntity, direction, x, y);

        this.speed = 0.15;
        this.minDmg = 2;
        this.maxDmg = 5;
        this.duration = 100;
        this.accuracy = 97;
        
        this.tileX = 4;
        this.tileY = 3;
        
        this.collisionSize = 0.05;
        this.displaySize = 0.4;
        this.collidesMonster = true;
    }

    animate(){
        
    }

    _onExpire(){
        super._onExpire();
        var numberOfProjectiles = Util.randInt(1, 2);
        for(var i = 0; i < numberOfProjectiles; i++){
            ParticleSpawner.spawn(CyanSparkParticle,  this.x, this.y);
        }
    }

}