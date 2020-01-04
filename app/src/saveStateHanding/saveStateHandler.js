const SaveStateHandler = {

    _saveStateData : null,

    init(){
        try {
            $.get('out/saveState.json', (data) => {this._saveStateData = data;});
        } catch {
            this._createSaveState();
        }
    },

    _createSaveState(){
        var saveState = {
            lastStageUnlocked: 1,
            settings : {}
        }
        this._saveStateData = saveState;
        this._createSaveState();
    },

    _createSaveStateFile(){
        // todo
    },

    get(){
        return this._saveStateData;
    },

    save(){
        // todo
    }

}