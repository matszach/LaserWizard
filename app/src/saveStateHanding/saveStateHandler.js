"use strict";
const SaveStateHandler = {

    fs : require('fs'),
    path : 'out/saveState.sav',
    _saveStateData : null,

    init(){
        if(this.fs.existsSync(SaveStateHandler.path)) {
            this.fs.readFile(SaveStateHandler.path, (err, data) => {
                let decoded = Cypher.decode(data);
                SaveStateHandler._saveStateData = JSON.parse(decoded);
            });
        } else {
            this._createDefault();
            this.save();
        }
    },

    _createDefault() {
        /* ***** DEFAULT ***** */
        this._saveStateData = {
            testMode : false,
            lastStageUnlocked: 1,
            settings : {
                music : true
            }
        }

        /* ***** TEST ***** */
        // this._saveStateData = {
        //     testMode : true,
        //     lastStageUnlocked: 4,
        //     settings : {
        //         music : false
        //     }
        // }
    },

    get(){
        return this._saveStateData;
    },

    save(){        
        let content = JSON.stringify(SaveStateHandler._saveStateData);
        content = Cypher.encode(content);
        this.fs.writeFile(SaveStateHandler.path, content, err => {});
    }

}