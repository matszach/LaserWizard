"use strict";
class MineDelayedExplosion extends _Action {

    radius = 3;
    minDmg = 85;
    maxDmg = 95;

    constructor(user){
        super(user);
        this.cooldownDuration = 9999;
    }

    onSuccess(){

        // mine alert animation
        this.user.opacity = 1;
        ParticleSpawner.createExplosion(LastingSmokeParticle,  this.user.x, this.user.y, Util.randInt(4, 8));

        // mine explosion
        setTimeout((a) => {

            // calc distance to the player, damage is based on the distance 
            var p = StageManager.currentStage.player;
            var dist = a.user.getDistanceToPoint(p.x, p.y);
            if(dist < a.radius) {
                p.takeDmg(Util.randInt(a.minDmg, a.maxDmg) * (a.radius - dist)/a.radius);
            }
            
            // explosion and expiration
            ParticleSpawner.createExplosion(FireParticle,  a.user.x, a.user.y, Util.randInt(20, 30));
            a.user.expire();

        }, 750, this);
    }

}