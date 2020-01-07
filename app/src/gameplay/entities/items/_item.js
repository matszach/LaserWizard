class _Item extends _Entity{

    // ==================== constructor ====================
    constructor(){
        super();
        this.direction = Math.random() * 360; // random starting rotation
        this.checksCollisions = true;
        this.collisoonCheckFrequency = 10;
        this.collidesPlayer = true;
    }

    // ==================== methods ====================
    _onCollisionWithPlayer(p){
        if(!this.expired && this.shouldPickUp(p)){
            this.onPickUp(p);
            this.expire();
            AudioRegistry.sounds.itemPickup.play();
        }
    }

    rotate(){
        this.direction += 0.5;
    }

    _doExist(thisEntity){
        thisEntity.rotate();
        thisEntity.doCheckCollisions();
    }

    shouldPickUp(player){
        // abstract
    }

    onPickUp(player){
        // abstract
    }

}