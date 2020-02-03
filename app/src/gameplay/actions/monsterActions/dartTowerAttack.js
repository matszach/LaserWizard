"use strict";
class DartTowerAttack extends _Action {

    constructor(user){
        super(user);
        this.cooldownDuration = 2000;
    }

    onSuccess(){
        for(var i = 0; i < 8; i++){
            this.doOnDelay(a => {
                ProjectileSpawner.spawn(DartTowerProjectile, a.user, a.user.x, a.user.y, a.user.direction);
            }, i * 50);
        }
    }

}