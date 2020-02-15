"use strict";
const AudioRegistry = {

    sounds : {},
    music : {},

    init(){
        this.sounds.itemPickup = new AudioWrapper('click', 3);
        
        this.music.ooze = new AudioWrapper('music\\s-ooze', 1);   
        this.music.hunter = new AudioWrapper('music\\s-hunter', 1);
        this.music.echo = new AudioWrapper('music\\s-echo', 1); 

    }

}