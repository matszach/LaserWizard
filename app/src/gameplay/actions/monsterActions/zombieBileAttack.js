"use strict";
class ZombieBileAttack extends _Action {

    constructor(user){
        super(user);
        this.cooldownDuration = 3000;
    }

    onSuccess(){
        for(var i = 0; i < 8; i++){
            ProjectileSpawner.spawn(ZombieBileProjectile, this.user, this.user.x, this.user.y, this.user.direction);
        }
    }

}