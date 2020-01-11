class Weapon1NProjectile extends _DamagingProjectile {

    // ==================== constructor ====================
    constructor(parentEntity, direction, x, y){
        // super constructor
        super(parentEntity, direction, x, y);

        this.speed = 0.13;
        this.minDmg = 5;
        this.maxDmg = 8;
        this.duration = 90;
        this.accuracy = 99;
        
        this.tileX = 0;
        this.tileY = 0;
        
        this.collisionSize = 0.4;
        this.displaySize = 0.6;
        this.collidesMonster = true;
    }

    animate(){

    }

}