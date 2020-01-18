"use strict";
class Key extends _Item{

    constructor(){
        super();
        this.displaySize = 1.0;
        this.collisionSize = 0.8; 
    }

    shouldPickUp(player){
        return true;
    }

}

class MagentaKey extends Key {

    constructor(){
        super();
        this.tileX = 6;
        this.tileY = 0;
    }

    onPickUp(player){
        player.keys.magenta = true;
    }
}


class CyanKey extends Key {

    constructor(){
        super();
        this.tileX = 7;
        this.tileY = 0;
    }

    onPickUp(player){
        player.keys.cyan = true;
    }
}