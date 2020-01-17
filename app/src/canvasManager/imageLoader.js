const ImageLoader = {

    floors: new Image(),
    walls: new Image(),
    monsters: new Image(),
    items: new Image(),
    player: new Image(),
    particles: new Image(),
    projectiles: new Image(),
    misc: new Image(),

    init(){
        this.floors.src = 'assets/images/floor_tiles.png';
        this.walls.src = 'assets/images/wall_tiles.png';
        this.monsters.src = 'assets/images/monsters.png';
        this.items.src = 'assets/images/items.png';
        this.player.src = 'assets/images/player.png';
        this.particles.src = 'assets/images/particles.png';
        this.projectiles.src = 'assets/images/projectiles.png';
        this.misc.src = 'assets/images/misc.png';
    }

}