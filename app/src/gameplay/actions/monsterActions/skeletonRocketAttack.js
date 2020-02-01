"use strict";
class SkeletonRocketAttack extends _Action {

    constructor(user){
        super(user);
        this.cooldownDuration = 2500;
    }

    onSuccess(){
        ProjectileSpawner.spawn(SkeletonRocketProjectile, this.user, this.user.x, this.user.y, this.user.direction);
    }

}