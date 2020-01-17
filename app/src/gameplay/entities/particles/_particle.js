class _Particle extends _Projectile{

    // ==================== constructor ====================
    constructor(direction, x, y){
        // super constructor
        super(null, direction, x, y);
        this.checksCollisions = false;
    }


    _doExist(thisEntity){
        thisEntity.travel(thisEntity.travelDirection);
        thisEntity.animate();
        thisEntity.tickDuration();
    }
}