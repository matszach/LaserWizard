"use strict";
class BackPack extends _Item {

    max = 150;
    step = 5;
    energy = 50;

    constructor(){
        super();
        this.displaySize = 0.8;
        this.collisionSize = 0.7;
    }
    shouldPickUp(player){
        return true;
    }
}

/* red */
class RedBackPack extends BackPack {
    constructor(){
        super();
        this.tileX = 0;
        this.tileY = 2;
    }

    onPickUp(player){
        if(player.maxRedEnergy < this.max - this.step){
            player.maxRedEnergy = this.max;
        } else {
            player.maxRedEnergy += this.step;
        }
        player.gainRedEnergy(this.energy);
    }
}

class RedBigBackPack extends RedBackPack {
    constructor(){
        super();
        this.tileX = 0;
        this.tileY = 3;
        this.max = 200;
        this.step = 10;
        this.energy = 100;
    }
}

/* yellow */
class YellowBackPack extends BackPack {
    constructor(){
        super();
        this.tileX = 1;
        this.tileY = 2;
    }

    onPickUp(player){
        if(player.maxYellowEnergy < this.max - this.step){
            player.maxYellowEnergy = this.max;
        } else {
            player.maxYellowEnergy += this.step;
        }
        player.gainYellowEnergy(this.energy);
    }
}

class YellowBigBackPack extends YellowBackPack {
    constructor(){
        super();
        this.tileX = 1;
        this.tileY = 3;
        this.max = 200;
        this.step = 10;
        this.energy = 100;
    }
}

/* blue */
class BlueBackPack extends BackPack {
    constructor(){
        super();
        this.tileX = 2;
        this.tileY = 2;
    }

    onPickUp(player){
        if(player.maxBlueEnergy < this.max - this.step){
            player.maxBlueEnergy = this.max;
        } else {
            player.maxBlueEnergy += this.step;
        }
        player.gainBlueEnergy(this.energy);
    }
}

class BlueBigBackPack extends BlueBackPack {
    constructor(){
        super();
        this.tileX = 2;
        this.tileY = 3;
        this.max = 200;
        this.step = 10;
        this.energy = 100;
    }
}