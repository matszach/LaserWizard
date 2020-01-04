class _Item extends _Entity{

    constructor(){
        super();
    }

    _onCollisionWithPlayer(p){
       if(this.shouldPickUp(p)){
           this.onPickUp(p);
       }
    }

    shouldPickUp(player){
        // abstract
    }

    onPickUp(player){
        // abstract
    }

}