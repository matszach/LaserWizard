class Weapon4R3Projectile extends _DamagingProjectile {

    // ==================== constructor ====================
    constructor(parentEntity, direction, x, y){
        // super constructor
        super(parentEntity, direction, x, y);

        this.speed = 0.14;
        this.minDmg = 1;
        this.maxDmg = 3;
        this.duration = 60;
        this.accuracy = 92;
        
        this.tileX = 2;
        this.tileY = 1;
        
        this.collisionSize = 0.15;
        this.displaySize = 0.2;
        this.collidesMonster = true;
    }

    animate(){
        
    }

}