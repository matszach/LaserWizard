"use strict";
class StormOrbSpikeAttack extends _Action {

    constructor(user){
        super(user);
        this.cooldownDuration = 3000;
    }

    onSuccess(){
        ProjectileSpawner.spawn(StormOrbSpikeProjectile, this.user, this.user.x, this.user.y, this.user.direction + 5);
        ProjectileSpawner.spawn(StormOrbSpikeProjectile, this.user, this.user.x, this.user.y, this.user.direction - 5);
    }

}