"use strict";
const SaveStateHandler = {

    fs : require('fs'),
    path : 'out/saveState.sav',
    _saveStateData : null,

    init(){
        if(this.fs.existsSync(SaveStateHandler.path)) {
            this.fs.readFile(SaveStateHandler.path, (err, data) => {
                SaveStateHandler._saveStateData = JSON.parse(Cypher.decode(data));
            });
        } else {
            this._createDefault();
            this.save();
        }
    },

    _createDefault() {
        this._saveStateData = {
            testMode : false,
            lastStageUnlocked: 1,
            settings : {}
        }
    },

    get(){
        return this._saveStateData;
    },

    save(){        
        let content = Cypher.encode(JSON.stringify(SaveStateHandler._saveStateData));
        this.fs.writeFile(SaveStateHandler.path, content, e => {});
    }

}