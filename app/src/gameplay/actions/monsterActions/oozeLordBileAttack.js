"use strict";
class OozeLordBileAttack extends _Action {

    constructor(user){
        super(user);
        this.cooldownDuration = 4000;
    }

    onSuccess(){
        for(var i = 0; i < 8; i++){
            ProjectileSpawner.spawn(OozeLordBileProjectile, this.user, this.user.x, this.user.y, this.user.direction);
        }
    }

}