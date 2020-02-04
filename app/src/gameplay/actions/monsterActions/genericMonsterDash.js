"use strict";
class GenericMonsterDash extends _Action {

    constructor(user, speed, duration, cooldown){
        super(user);
        this.speed = speed;
        this.duration = duration;
        this.cooldownDuration = cooldown;
    }

    onSuccess(...args){
        // args[0] - direction 
        this.user.applyPushback(args[0], this.speed, this.duration);
    }

}