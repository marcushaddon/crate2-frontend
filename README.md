# mycrate2
: The Streets

Jk. Re-writing mycrate.io in Angular 2/4/5/76.

### Installation: 
1. Clone this repo.
2. ```npm install```
3. ```ng serve --open```

### Currently working on:
Most of the stereo service is written, putting together a little test UI (stereo-controls-component) to demonstrate/figure out just what logic can be handeled by stereo service methods, and what logic needs to be handled in components (for example, there are separate  cueTracklist, cueTracks and cueTrack methods on the stereo, because cueing a tracklist nessecarily implies cueing its tracks, but cueing a new track does not nessecarily imply cueing new tracks/tracklist).

An album, a playlist, and their respective tracks are hard coded into index.html for now, just to mess around with.

The class Track currently has both a "name" and "trackName" attribute. This is temporary and because I was bad at naming things when I first started.

The repo is called mycrate2 but the Angular project inside is called crate 2.

I'm really bad at spelling the word queueue, so thats a thing...
