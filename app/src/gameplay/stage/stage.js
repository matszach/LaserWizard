class Stage {   

    // ids to diplay the correct image from tilesets
    floorIds;
    wallIds;

    // 0 - passable, 1 - wall (todo slowing, damaging ?)
    collisionMap;

    // event triggers
    beacons;

    // active entities
    player;
    monsters;
    projectiles;
    barriers;
    particles;
    items;

    constructor(){
        this.player = new Player();
        this.monsters = [];
        this.projectiles = [];
        this.barriers = [];
        this.particles = [];
        this.items = [];
        this.beacons = [];
    }

}