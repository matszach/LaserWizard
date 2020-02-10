"use strict";
class MazeMasterStomp extends _Action {

    constructor(user){
        super(user);
        this.cooldownDuration = 3000;
    }

    onSuccess(){
        for(var i = 0; i < 18; i++){
            ParticleSpawner.spawn(FastSmokeParticle, this.user.x, this.user.y, i * 20);
        }
        let p = StageManager.currentStage.player;
        if(this.user.getDistanceToPoint(p.x, p.y) < 2.5) {
            let dir = this.user.getDirectionToPoint(p.x, p.y);
            p.applyPushback(dir, 0.2, 20);
            p.takeDmg(Util.randFloat(30, 40));
        }
    }

}