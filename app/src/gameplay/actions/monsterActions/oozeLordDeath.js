"use strict";
class OozeLordDeath extends _Action {

    constructor(user){
        super(user);
        this.cooldownDuration = 9999;
    }

    onSuccess(){
        for(var i = 0; i < 36; i++){
            ProjectileSpawner.spawn(ZombieBileProjectile, this.user, this.user.x, this.user.y, i * 10);
        }
        for(var i = 0; i < 18; i++){
            ProjectileSpawner.spawn(OozeLordBileProjectile, this.user, this.user.x, this.user.y, i * 20);
        }
    }

}