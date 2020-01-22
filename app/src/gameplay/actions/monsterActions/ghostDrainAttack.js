"use strict";
class GhostDrainAttack extends _Action {

    constructor(user){
        super(user);
        this.cooldownDuration = 2500;
    }

    onSuccess(){
        this.doOnDelay(a => {
            ProjectileSpawner.spawn(GhostDrainProjectile, a.user, a.user.x, a.user.y, a.user.direction);
        }, 50);
        this.doOnDelay(a => {
            ProjectileSpawner.spawn(GhostDrainProjectile, a.user, a.user.x, a.user.y, a.user.direction + 15);
        }, 200);
        this.doOnDelay(a => {
            ProjectileSpawner.spawn(GhostDrainProjectile, a.user, a.user.x, a.user.y, a.user.direction - 15);
        }, 200);
    }

}