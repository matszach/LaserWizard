"use strict";
class _Character extends _Damageable{
    
    // ==================== constructor ====================
    constructor(){
        // super constructor
        super();
    }

    // ==================== methods ====================
    launchProjectile(projectileClass, direction){
        ProjectileSpawner.spawn(projectileClass, this, this.x, this.y, direction);
    }

    _onIsInWall(){
        this.restorePreviousPosition();
    }   
}