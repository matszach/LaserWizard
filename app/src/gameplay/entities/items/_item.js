class _Item extends _Entity{

    // ==================== constructor ====================
    constructor(){
        super();
        this.direction = Math.random() * 360; // random starting rotation
    }

    // ==================== methods ====================
    _onCollisionWithPlayer(p){
       if(this.shouldPickUp(p)){
           this.onPickUp(p);
           this.expire();
       }
    }

    rotate(){
        this.direction += 0.5;
    }

    _doExist(thisEntity){
        thisEntity.rotate();
        // todo
    }

    shouldPickUp(player){
        // abstract
    }

    onPickUp(player){
        // abstract
    }


    

}