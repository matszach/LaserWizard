class Weapon2R1Projectile extends _DamagingProjectile {

    // ==================== constructor ====================
    constructor(parentEntity, direction, x, y){
        // super constructor
        super(parentEntity, direction, x, y);

        this.speed = 0.16;
        this.minDmg = 3;
        this.maxDmg = 6;
        this.duration = 80;
        this.accuracy = 98;
        
        this.tileX = 0;
        this.tileY = 1;
        
        this.collisionSize = 0.3;
        this.displaySize = 0.4;
        this.collidesMonster = true;
    }

    animate(){
        
    }

}