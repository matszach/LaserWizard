"use strict";
class PlayerExitBeacon extends _Beacon {

    constructor(x, y){
        super(x, y, 1);
    }

    _fire(){
        StageLoader.loadNext();
    }
}