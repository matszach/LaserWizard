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
        
        this.tileX = 1;
        this.tileY = 3;
        
        this.collisionSize = 0.05;
        this.displaySize = 0.4;
        this.collidesMonster = true;
    }

    animate(){
        
    }

}