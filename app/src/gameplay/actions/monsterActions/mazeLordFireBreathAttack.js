"use strict";
class MazeLordFireBreathAttack extends _Action {

    constructor(user){
        super(user);
        this.cooldownDuration = 7500;
    }

    onSuccess(){
        for(var i = 0; i < 15; i++){
            this.doOnDelay(a => {
                ProjectileSpawner.spawn(MazeLordFireBreathProjectile, 
                    a.user, a.user.x, a.user.y, a.user.direction);
            }, i * 40);
        }
        ParticleSpawner.createExplosion(LastingSmokeParticle, this.user.x, this.user.y, Util.randInt(20, 30));
    }

}