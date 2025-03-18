## Features
* Play, pause, and reset audio tracks.
* Control volume for individual or all tracks.
* Mute and unmute tracks.
* Add, remove, and switch tracks.
* Get information about a track.

## Examples
```javascript
// Create audio elements via <audio> tag in HTML
let track1 = document.querySelector(".audioELement");
let track2 = document.querySelector(".audioElement2");

// Create an Audio instance with tracks
let audioManager = new Audio(track1, track2);

// Play all tracks
audioManager.playAll();

// Pause a specific track
audioManager.pause(0);

// Change volume of all tracks
audioManager.volumeAll(50);

// Mute a specific track
audioManager.mute(1);

// Get information about a track
console.log(audioManager.getTrackInfo(0));

// Add a new track
let track3 = new Audio('path/to/audio3.mp3');
audioManager.addTrack(track3);

// Remove a track
audioManager.removeTrack(1);

// Switch positions of two tracks
audioManager.switchTracks(0, 2);
```
