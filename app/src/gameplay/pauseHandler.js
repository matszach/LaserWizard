"use strict";
const PauseHandler = {

    paused: true,

    pause(){
        this.paused = true;
        $.get('templates\\pauseMenu.html', (data) => $('#in-game-menus-div').html(data));
        StageManager.sleepAll();
    },

    unpause(){
        this.paused = false;
        $('#in-game-menus-div').html('');
        StageManager.awakenAll();
    }
}