"use strict";
class _Action{

    // ==================== fields ====================
    user;
    cooldownDuration;
    isOnCooldown;

    // ==================== constructor ====================
    constructor(user){
        this.user = user;        
        this.cooldownDuration = 250;
        this.isOnCooldown = false;
    }

    // ==================== methods ====================
    execute(){
        if(!this.isOnCooldown && this.test()){
            this.startCooldown();
            this.onSuccess();
        } else {
            this.onFailure();
        }
    }

    startCooldown(){
        this.isOnCooldown = true;
        setTimeout(() => this.isOnCooldown = false, this.cooldownDuration)
    }

    onSuccess(){
        // abstract
    }

    onFailure(){
        // abstract
    }

    test(){
        return true;
        // override if, for eg. the weapon requires ammo and should not fire if  the ammo is absent
    }

}