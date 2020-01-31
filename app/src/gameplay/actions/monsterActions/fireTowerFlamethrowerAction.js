"use strict";
class FireTowerFlamethrowerAttack extends _Action {

    constructor(user){
        super(user);
        this.cooldownDuration = 5000;
    }

    onSuccess(){
        for(var i = 0; i < 10; i++){
            this.doOnDelay(a => {
                for(var j = 0; j < 4; j++){
                    ProjectileSpawner.spawn(FireTowerFireProjectile, 
                        a.user, a.user.x, a.user.y, a.user.direction + j * 90);
                }
            }, i * 75);
        }
        ParticleSpawner.createExplosion(LastingSmoke, this.user.x, this.user.y, Util.randInt(10, 15));
    }

}