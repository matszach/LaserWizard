class Key extends _Item{

    constructor(){
        super();
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
        player.key.magenta = true;
    }
}


class CyanKey extends Key {

    constructor(){
        super();
        this.tileX = 7;
        this.tileY = 0;
    }

    onPickUp(player){
        player.key.cyan = true;
    }
}