"use strict";
class MarineLaserAttack extends _Action {

    constructor(user){
        super(user);
        this.cooldownDuration = 3000;
    }

    onSuccess(){
        this.user.speed /= 2;
        setTimeout(e => {e.speed *= 2;}, 1000, this.user);
        for(var i = 0; i < 10; i++){
            this.doOnDelay(a => {
                ProjectileSpawner.spawn(MarineLaserProjectile, a.user, a.user.x, a.user.y, a.user.direction);
            }, i * 100);
        }
    }

}