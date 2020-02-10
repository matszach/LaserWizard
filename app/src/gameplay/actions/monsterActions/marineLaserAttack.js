"use strict";
class MarineLaserAttack extends _Action {

    constructor(user){
        super(user);
        this.cooldownDuration = 3000;
    }

    onSuccess(){
        this.user.speed /= 2;
        setTimeout(e => {e.speed *= 2;}, 1500, this.user);
        for(var i = 0; i < 10; i++){
            this.doOnDelay(a => {
                if(!a.user.expired){
                    ProjectileSpawner.spawn(MarineLaserProjectile, a.user, a.user.x, a.user.y, a.user.direction);
                } 
            }, i * 150);
        }
    }

}