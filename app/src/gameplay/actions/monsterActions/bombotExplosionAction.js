"use strict";
class BombotExplosion extends _Action {

    constructor(user){
        super(user);
        this.cooldownDuration = 9999;
    }

    onSuccess(){
        for(var i = 0; i < 24; i++){
            ProjectileSpawner.spawn(BombotShrapnelProjectile, this.user, this.user.x, this.user.y, i * 15);
        }
    }

}