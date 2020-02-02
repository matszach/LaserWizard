const MusicPlayer = {

    songs : [],

    songIndex : 0, 

    interval : null,

    init() {
        this.songs.push(AudioRegistry.music.hunter);
        this.songs.push(AudioRegistry.music.echo);
    },

    playMusic() {
        if(!MusicPlayer.songs[MusicPlayer.songIndex].isOn()){
            MusicPlayer.songIndex++;
            MusicPlayer.songIndex = MusicPlayer.songIndex < MusicPlayer.songs.length ? MusicPlayer.songIndex : 0;
            MusicPlayer.songs[MusicPlayer.songIndex].play();
        }
    },

    start() {
        if(!this.interval){
            this.interval = setInterval(this.playMusic, 5000);
        }
    }, 

    stop() {
        clearInterval(this.interval);
        this.songs[this.songIndex].pause();
        this.interval = null;
    }




}

