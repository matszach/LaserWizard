"use strict";
const AudioRegistry = {

    sounds : {},
    music : {},

    init(){
        this.sounds.itemPickup = new AudioWrapper('click', 3);
    }


}