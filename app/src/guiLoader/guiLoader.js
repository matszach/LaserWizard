const GuiLoader = {

    /**
     * @param {string} url - path to the loaded template
     * @param {Function} postLoadFunction - function to be called after the template is loaded (asynch. loading)
     */
    _loadTemplate(url, postLoadFunction){
        $.get(url, (data) => {
            $('#gui-div').html(data);
            if(postLoadFunction){
                postLoadFunction();
            }
        });
    },

    _loadTemplateByName(name, postLoadFunction){
        var url = `templates\\${name}.html`;
        this._loadTemplate(url, postLoadFunction);
    },

    // TITLE
    loadTitle(){
        this._loadTemplateByName('title');
    },

    // MAIN MENU
    loadMainMenu(){
        this._loadTemplateByName('mainMenu');
    },

    // STAGE SELECT
    loadStageSelect(){
        this._loadTemplateByName('stageSelect', () => {
            this._loadStageButtons(32);
            this._setUnlockedStages();
        });
    },

    _loadStageButtons(nof_stages){
        var html = '';
        for(var i = 0; i < nof_stages; i++){
            if(i % 8 == 0) html += '<div class="ss-stage-row">';
            levelNumber = i + 1;
            html += 
            `<input id='ss-stage-${levelNumber}' class='ss-stage-item-button' value='${levelNumber}' 
                onclick='StageLoader.loadStage(${levelNumber})'
                style='animation-duration: ${0.3 + 0.04 * levelNumber}s;'/>`;
            if(i % 8 == 7) html += '</div>';
        }
        $('.ss-stages-div').html(html);
    },

    _setUnlockedStages(){
        for(var i = 1; i <= SaveStateHandler.get().lastStageUnlocked; i++){
            $(`#ss-stage-${i}`).addClass('unlocked');
        }
    },

    // LOAD GAME
    loadLoadGame(){
        this._loadTemplateByName('loadGame');
    },

    // ABOUT
    loadAbout(){
        this._loadTemplateByName('about');
    },

    // OPTIONS
    loadOptions(){
        this._loadTemplateByName('options');
    },

    // IN GAME GUI
    loadInGameGui(){
        this._loadTemplateByName('inGameGui');
    }
 
}