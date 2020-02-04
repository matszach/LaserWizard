"use strict";
class GhostDrainAttack extends _Action {

    constructor(user){
        super(user);
        this.cooldownDuration = 2500;
    }

    onSuccess(){
        ProjectileSpawner.spawn(GhostDrainProjectile, this.user, this.user.x, this.user.y, this.user.direction);
        ProjectileSpawner.spawn(GhostDrainProjectile, this.user, this.user.x, this.user.y, this.user.direction + 15);
        ProjectileSpawner.spawn(GhostDrainProjectile, this.user, this.user.x, this.user.y, this.user.direction - 15);
    }

}