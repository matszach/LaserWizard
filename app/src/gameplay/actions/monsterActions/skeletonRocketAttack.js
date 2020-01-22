"use strict";
class SkeletonRocketAttack extends _Action {

    constructor(user){
        super(user);
        this.cooldownDuration = 4000;
    }

    onSuccess(){
        ProjectileSpawner.spawn(SkeletonRocketProjectile, this.user, this.user.x, this.user.y, this.user.direction);
    }

}