"use strict";
class DroneBulletAttack extends _Action {

    constructor(user){
        super(user);
        this.cooldownDuration = 2000;
    }

    onSuccess(){
        for(var i = 0; i < 5; i++){
            this.doOnDelay(a => {
                if(!a.user.expired){
                    ProjectileSpawner.spawn(DroneBulletProjectile, a.user, a.user.x, a.user.y, a.user.direction);
                }
            }, i * 150);
        }
    }

}