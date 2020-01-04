const Main = {

    // called on game init
    init(){
        GuiLoader.loadTitle();
        CanvasManager.init();
        SaveStateHandler.init();
        StagePainter.init();
        ImageLoader.init();
    },

}

$(document).ready(Main.init);