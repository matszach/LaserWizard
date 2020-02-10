"use strict";
class LaserAcoliteAttack extends _Action {

    constructor(user){
        super(user);
        this.cooldownDuration = 2000;
    }

    onSuccess(){
        let dirMod = Util.chance(0.5) ? 1 : -1;
        for(var i = 0; i < 5; i++){
            let dir = dirMod * (-20 + 10 * i);
            this.doOnDelay(a => {
                ProjectileSpawner.spawn(LaserAcoliteOrbProjectile, a.user, a.user.x, a.user.y, 
                    a.user.direction + dir);
            }, i * 100);
        }
    }

}