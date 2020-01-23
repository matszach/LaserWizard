"use strict";
class OozeLordDamaged extends _Action {

    constructor(user){
        super(user);
        this.cooldownDuration = 250;
    }

    onSuccess(){
        for(var i = 0; i < 3; i++){
            ProjectileSpawner.spawn(OozeLordBileProjectile, this.user, this.user.x, this.user.y, Util.randFloat(0, 360));
        }
    }

}