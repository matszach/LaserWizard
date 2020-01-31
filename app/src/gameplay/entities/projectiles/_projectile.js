"use strict";
class _Projectile extends _Entity {

    // ==================== fields ====================
    duration = 100;          // - duration left in animation ticks
    accuracy = 100;          // - projectiles accuracy, 100 = perfect, 0 = fully random
    parentEntity;            // - entity that's the origin of the projectile
    travelDirection;         // - direction of the projectile's travel (not necessarily equal to this.direction (eg. in rotating projectiles))
    
    // ==================== constructor ====================
    constructor(parentEntity, direction, x, y){
        // super constructor
        super();
        // on-init calculated values
        this.direction = direction;
        this.travelDirection = direction;
        this.checksCollisions = true;
        this.parentEntity = parentEntity;
        this.x = x;
        this.y = y;
    }

    // ==================== methods ====================
    tickDuration(){
        this.duration -= 1;
        if(this.duration < 0){
            this.expire();
        }
    }

    _doExist(thisEntity){
        thisEntity.travel(thisEntity.travelDirection);
        thisEntity.animate();
        thisEntity.checkForInWall();
        thisEntity.doCheckCollisions();
        thisEntity.tickDuration();
    }

    animate(){
        // abstract
    }

    _onIsInWall(){
        this.expire();
    }

}