const GameOverHandler = {

    invoke() {
        this.paused = true;
        $.get('templates\\gameOver.html', (data) => $('#in-game-menus-div').html(data));
        StageManager.sleepAll();
    }

}