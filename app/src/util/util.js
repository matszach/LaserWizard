"use strict";
const Util = {

    get2Darray(sizeX, sizeY, defaultValue){
        var a = new Array(sizeX);
        for(var x = 0; x < sizeX; x++){
            var row = new Array(sizeY);
            if(!(defaultValue == undefined)){
                for(var y = 0; y < sizeY; y++){
                    row[y] = defaultValue;
                }
            }
            a[x] = row;
        }
        return a;
    },

    randInt(min, max){
        return Math.round(min + (max - min) * Math.random()); 
    },

    randFloat(min, max){
        return min + (max - min) * Math.random(); 
    },

    chance(p){
        return Math.random() < p;
    },

    easeTo(value, target, maxStep) {
        var diff = target - value;
        if(Math.abs(diff) <= maxStep){
            return target;
        } else if(diff < 0) {
            return value - maxStep;
        } else {
            return value + maxStep;
        }
    }

}