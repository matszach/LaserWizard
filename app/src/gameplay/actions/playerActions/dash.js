"use strict";
class Dash extends _WeaponAction{

    cost = 1;

    constructor(player){
        super(player);
        this.cooldownDuration = 1000;
    }

    onSuccess(...args){
        // player opacity changes for the duration of the dash
        this.player.opacity = 0.5;
        setTimeout(a => {
            a.player.opacity = 1;
        }, 250, this);
        // args[0] - player direction based on key 
        var afterImageSpawn = true;
        this.player.applyPushback(args[0], 0.1, 25, (p) => {
            if(afterImageSpawn){
                ParticleSpawner.spawn(PlayerAfterimageParticle, p.x, p.y, p.direction);
            }
            afterImageSpawn = !afterImageSpawn;
        });
    }

    test(){
        return this.player.payRedEnergy(this.cost);
    }

}