class FloatingDamageNumber {

    // ==================== fields ====================
    value = 1;              // - how much damage has been dealth 
    x = 0;                  // - current X position
    y = 0;                  // - current Y position 
    opacity = 1;            // - the number's opacity, slowly counts to 0 and then the aimation expires
    expired = false         // - marks the animation as finished

    lifecycleInterval;      // - entity's lifecycle interval reference

    // ==================== constructor ====================
    constructor(v, x, y){
        this.value = v;
        this.x = x + Math.random() * 1.5 - 0.75; // random position of the number
        this.y = y + Math.random() * 1.5 - 0.75;
        this.start();
    }

    // ==================== methods ====================
    start(){
        this.lifecycleInterval = setInterval(this.tick, 100, this);
    }

    tick(fdm){
        fdm.opacity -= 0.1;
        if(fdm.opacity <= 0){
            fdm.expired = true;
            clearInterval(fdm.lifecycleInterval);
        }
    }

}