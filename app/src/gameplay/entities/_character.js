class _Character extends _Damageable{

    // ==================== fields ====================
    power;                  // - used as a multiplier for character's actions etc.
    
    // ==================== constructor ====================
    constructor(){
        // super constructor
        super();
        // default values
        this.power = 10;
    }

    // ==================== methods ====================
    launchProjectile(projectileClass, direction){
        ProjectileSpawner.spawn(projectileClass, this, this.x, this.y, direction);
    }

    _onIsInWall(){
        this.restorePreviousPosition(); // if moved into t
    }
}