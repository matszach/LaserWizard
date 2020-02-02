"use strict";
const Main = {

    // called on game init
    init(){
        GuiLoader.loadTitle();
        CanvasManager.init();
        SaveStateHandler.init();
        StagePainter.init();
        ImageLoader.init();
        UserInputHandler.init();
        AudioRegistry.init();
        MusicPlayer.init();
    },

}

$(document).ready(Main.init);
$(document).ready(window.resizeTo(800, 601));
$(document).ready(window.resizeTo(800, 600)); // temporary solution


// TODO REMOVE THIS




