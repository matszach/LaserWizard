class Weapon1NProjectile extends _DamagingProjectile {

    // ==================== constructor ====================
    constructor(parentEntity, direction, x, y){
        // super constructor
        super(parentEntity, direction, x, y);

        this.speed = 0.15;
        this.minDmg = 5;
        this.maxDmg = 8;
        this.duration = 100;
        this.accuracy = 95;
        
        this.tileX = 0;
        this.tileY = 0;
    }

    animate(){
        this.rotate(3);
    }
}