// Audio class to manage audio elements
class Audio {
    //Tracks
    tracks = [
        // Select the audio elements
    ];

    constructor(...tracks) {
        if (tracks.length === 1 && Array.isArray(tracks[0])) {
            this.tracks = tracks[0];
        } 
        else {
            this.tracks = tracks;
        }
        this.pauseAll(); 
    }

    //Pauses every track
    pauseAll(){
        this.tracks.forEach(function(track) {
            track.pause();
            track.volume = volume.value / 100;
        }, this);
    }

    //Plays every track
    playAll(){
        this.tracks.forEach(function(track) {
            track.play();
            track.volume = volume.value / 100;
        }, this);
    }

    //Pauses a track
    pause(index){
        this.tracks[index].pause();
    }

    //Plays a track
    play(index){
        this.tracks[index].play();
    }

    //Resets a track
    reset(index){
        this.tracks[index].currentTime = 0;
    }

    //Changes volume of the track
    volumeAll(value){
        this.tracks.forEach(function(track) {
            track.volume = value / 100;
        }, this);
    }

    //Changes volume of the track
    volume(index, value){
        this.tracks[index].volume = value / 100;
    }

    //Mutes a track
    mute(index){
        this.tracks[index].muted = true;
    }

    //Unmutes a track
    unmute(index){
        this.tracks[index].muted = false;
    }

    // Adds a new track
    addTrack(track) {
        this.tracks.push(track);
    }

    // Removes a track by index
    removeTrack(index) {
        this.tracks.splice(index, 1);
    }

    // Switches the position of two tracks
    switchTracks(index1, index2) {
        [this.tracks[index1], this.tracks[index2]] = [this.tracks[index2], this.tracks[index1]];
    }


    // Toggles mute state of a track
    toggleMute(index) {
        this.tracks[index].muted = !this.tracks[index].muted;
    }

    // Gets information about a track
    getTrackInfo(index) {
        return {
            currentTime: this.tracks[index].currentTime,
            duration: this.tracks[index].duration,
            volume: this.tracks[index].volume,
            muted: this.tracks[index].muted
        };
    }
}