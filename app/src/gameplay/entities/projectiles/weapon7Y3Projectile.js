class Weapon7Y3Projectile extends _DamagingProjectile {

    // ==================== constructor ====================
    constructor(parentEntity, direction, x, y){
        // super constructor
        super(parentEntity, direction, x, y);

        this.speed = 0.12;
        this.minDmg = 20;
        this.maxDmg = 30;
        this.duration = 100;
        this.accuracy = 99;
        
        this.tileX = 2;
        this.tileY = 2;
        
        this.collisionSize = 0.6;
        this.displaySize = 0.7;
        this.collidesMonster = true;
    }

    animate(){
        
    }

}