"use strict";
class _DamagingProjectile extends _Projectile {

    // ==================== fields ====================
    minDmg = 1;                 // - minimum damage that th eprojectile can deal
    maxDmg = 10;                // - maximum damage that th eprojectile can deal

    // ==================== constructor ====================
    constructor(parentEntity, direction, x, y){
        // super constructor
        super(parentEntity, direction, x, y);
    }

    calculateDamage(){
        return Util.randFloat(this.minDmg, this.maxDmg);
    }

    _onCollisionWithMonster(m){
        m.takeDmg(this.calculateDamage());
        this.expire();
    }

    _onCollisionWithPlayer(p){
        p.takeDmg(this.calculateDamage());
        this.expire();
    }

}