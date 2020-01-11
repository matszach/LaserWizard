class Weapon6Y2Projectile extends _DamagingProjectile {

    // ==================== constructor ====================
    constructor(parentEntity, direction, x, y){
        // super constructor
        super(parentEntity, direction, x, y);

        this.speed = 0.14;
        this.minDmg = 12;
        this.maxDmg = 16;
        this.duration = 90;
        this.accuracy = 99.5;
        
        this.tileX = 1;
        this.tileY = 2;
        
        this.collisionSize = 0.3;
        this.displaySize = 0.4;
        this.collidesMonster = true;
    }

    animate(){
        
    }

}