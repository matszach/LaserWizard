class _Item extends _Entity{

    // ==================== fields ====================
    tileX;              // x position in tileset
    tileY;              // y position in tileset

    // ==================== constructor ====================
    constructor(){
        super();
        this.tileX = 0;
        this.tileY = 0;
    }

    // ==================== methods ====================
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