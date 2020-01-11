class Weapon3R2Projectile extends _DamagingProjectile {

    // ==================== constructor ====================
    constructor(parentEntity, direction, x, y){
        // super constructor
        super(parentEntity, direction, x, y);

        this.speed = 0.22;
        this.minDmg = 12;
        this.maxDmg = 18;
        this.duration = 120;
        this.accuracy = 100;
        
        this.tileX = 1;
        this.tileY = 1;
        
        this.collisionSize = 0.5;
        this.displaySize = 0.6;
        this.collidesMonster = true;
    }

    animate(){
        
    }

}