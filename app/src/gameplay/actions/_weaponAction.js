class _WeaponAction{

    // ==================== fields ====================
    player;
    cooldownDuration;
    isOnCooldown;

    // ==================== constructor ====================
    constructor(player){
        this.player = player;        
        this.cooldownDuration = 100;
        this.isOnCooldown = false;
    }

    // ==================== methods ====================
    execute(){
        if(!this.isOnCooldown){
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

}