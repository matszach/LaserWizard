const ImageLoader = {

    floors: new Image(),
    walls: new Image(),
    monsters: new Image(),
    items: new Image(),
    player: new Image(),
    particles: new Image(),
    projectiles: new Image(),

    init(){
        this.floors.src = 'assets/images/floor_tiles.png';
        this.walls.src = 'assets/images/wall_tiles.png';
        this.items.src = 'assets/images/items.png';
    }

}