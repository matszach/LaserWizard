"use strict";
/*
An Audio object cannot .play() while its already playing.
This class creates multiple Audio instances of the same sound file and plays them in sequence.
*/
class AudioWrapper {

    maxInstances;
    nextIndex;

    audioInstances = [];

    constructor(fileName, maxInstances){
        this.maxInstances = maxInstances;
        this.nextIndex = 0;
        var url = `assets\\sounds\\${fileName}.mp3`;
        for(var i = 0; i < maxInstances; i++){
            this.audioInstances.push(new Audio(url));
        }
    }

    play(){
        this.audioInstances[this.nextIndex++].play();
        if(this.nextIndex >= this.maxInstances){
            this.nextIndex = 0;
        }
    }

}