"use strict";
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

    // animations
    numberAnimations;

    constructor(player){
        // if a player is passed as an argument then it will be used
        // a brand new one is created otherwise
        this.player = player ?  player : new Player(); 
        this.monsters = [];
        this.projectiles = [];
        this.barriers = [];
        this.particles = [];
        this.items = [];
        this.beacons = [];
        this.numberAnimations = [];
    }

}