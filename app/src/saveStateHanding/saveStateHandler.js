"use strict";
const SaveStateHandler = {

    fs : require('fs'),
    _saveStateData : null,

    decode(data) {
        return data;
    },

    encode(data) {
        return data;
    },

    init(){
        if(this.fs.existsSync('out/saveState.json')) {
            this.fs.readFile('out/saveState.json', (err, data) => {
                SaveStateHandler._saveStateData = JSON.parse(SaveStateHandler.decode(data));
            });
        } else {
            this._createDefault();
            this.save();
        }
    },

    _createDefault() {
        this._saveStateData = {
            testMode : true,
            lastStageUnlocked: 1,
            settings : {}
        }
    },

    get(){
        return this._saveStateData;
    },

    save(){        
        let content = JSON.stringify(SaveStateHandler.encode(SaveStateHandler._saveStateData));
        this.fs.writeFile('out/saveState.json', content, e => {});
    }

}