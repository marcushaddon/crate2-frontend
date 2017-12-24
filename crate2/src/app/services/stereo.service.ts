import { Injectable, EventEmitter, NgZone } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs/Rx';

// Classes
// import ITrackList from '../models/itrack-list';
import { Track, Artist, Album, Playlist, ITrackList, User } from '../models';


declare const player: any;

@Injectable()
export class StereoService {

  private _state: number;
  stateChanged: BehaviorSubject<number> = new BehaviorSubject(-1);

  // For this and components to subscribe to
  timeChanged: BehaviorSubject<number> = new BehaviorSubject(0);

  tracklistChanged: BehaviorSubject<ITrackList> = new BehaviorSubject(null);

  // Current tracklist
  private _tracks: Track[];

  tracksChanged: BehaviorSubject<Track[]> = new BehaviorSubject(null);

    // Current track
    public trackIndex: number;
    private _track: Track;
    trackChanged: BehaviorSubject<Track> = new BehaviorSubject(null);

  // Playback point of our current track
  currentTrackTime = 0;

  // For internal use
  private _timer = null;
  private _timerSubscription = null;

  // Current album or playlist
  private _tracklist: ITrackList;



  set tracklist(tracklist: ITrackList) {
    this._tracklist = tracklist;
    // Don't alert everyone if we already have this tracklist queeueeued
    if (this._tracklist._id === tracklist._id) {
      return;
    }
    this.tracklistChanged.next(this._tracklist);
  }

  get tracklist(): ITrackList {
    return this._tracklist;
  }

  cueTracklist(tracklist: ITrackList) {
    if (!this.tracklist || tracklist._id && this.tracklist._id !== tracklist._id) {
      this.tracklist = tracklist;
      // TODO: Cue tracks
      this.cueTracks(tracklist.tracks);
      // TODO: Increment listens for tracklist
    }
  }



  set tracks(tracks: Track[]) {
    this._tracks = tracks;
    this.tracksChanged.next(this._tracks);
  }

  get tracks(): Track[] {
    return this._tracks;
  }

  // Only to be called when we are actually changing tracks,
  // for the purpose of resetting the current track
  cueTracks(tracks: Track[]) {
    this.tracks = tracks;
    this.cueTrack(this.tracks[0]);
  }

  set track(track: Track) {
    this._track = track;
    // EDGECASE: Need to check somethig more specific in case playlists have repeated tracks
    this.trackIndex = this._tracks.indexOf(track);
    this.trackChanged.next(this._track);
  }

  get track(): Track {
    return this._track;
  }

  public cueTrack(track: Track): void {
    // If it's part of the same video, just cue to the beginning
    let newVideo = true;
    if (this.track !== undefined && this.track.videoId === track.videoId) {
      newVideo = false;
    }
    this.track = track;
    if (newVideo) {
      player.loadVideoById({
        videoId: this.track.videoId,
        startSeconds: this.track.begin
      });

      // Start timing
      this._startTiming();

      // Make sure google isn't messing with our time
      const googleGlitch = this.stateChanged
      .subscribe(
        (state) => {
          if (this.isPlaying) {
            if (this.videoProgress > this.track.begin + 5) {
              console.log('FUCKERY"');
              player.seekTo(this.track.begin);
            }
            googleGlitch.unsubscribe();
          }
        });

    } else {
      player.seekTo(this.track.begin);
    }
  }


  get state() {
    return this._state;
  }

  set state(newState: number) {
    // console.log("Setting stereo state");
    this._state = newState;
    this.stateChanged.next(newState);
  }

  get isPlaying(): boolean {
    return player !== undefined && player.getPlayerState() === 1;
  }

  get isLoading(): boolean {
    return player !== undefined && player.getPlayerState() === 3;
  }

  get isPaused(): boolean {
    return player !== undefined && player.getPlayerState() === 2;
  }

  get cuedVideoLength(): number {
    return player.getDuration();
  }

  get videoProgress(): number {
    if (!player || player.getCurrentTime === undefined) {
      return 0;
    }
    return player.getCurrentTime();
  }

  get progress(): number {
    return this.videoProgress - this.track.begin;
  }

  togglePlay() {
    switch (player.getPlayerState()) {
      case -1:
      case 0:
      case 2:
      case 3:
      case 5:
        player.playVideo();
        this._startTiming();
        break;
      default:
        player.pauseVideo();
        this._stopTiming();

    }
  }

  pause(): void {
    player.pauseVideo();
  }

  seek(time: number) {
    player.seekTo(time);
  }

  next(): void {
    if (this.trackIndex < this.tracks.length) {
      this.trackIndex++;
      this.cueTrack(this.tracks[this.trackIndex]);
    } else {
      this.pause();
    }
  }

  back(): void {
    if (this.trackIndex > 0) {
      this.trackIndex--;
      this.cueTrack(this.tracks[this.trackIndex]);
    } else {
      this.pause();
    }
  }

  private _startTiming(): void {
    this._timer = Observable.timer(0, 1000)
    .timeInterval()
    .map(function (x) { return x.value; });

    // We also need to subscribe to ourselves to make decisions
    // about whether to load the next song yet
    this._timerSubscription = this._timer.subscribe(
      e => {
        this._handleTimeChange();
        this.timeChanged.next(player.getCurrentTime());
      },
      err => console.log('Stereo timer error!')
    );
  }

  private _stopTiming(): void {
    this._timerSubscription.unsubscribe();
    this._timerSubscription = null;
    this._timer = null;
  }

  private _handleTimeChange(): void {
    if (!this.track) {
      this.currentTrackTime = 0;
      return;
    }

    // Update our track time
    const trackTime = player.getCurrentTime() - this.track.begin;
    this.currentTrackTime = trackTime;

    // Do we need to go to the next track?
    if (player.getCurrentTime() >= this.track.stop) {
      console.log('Time for the next song!');
      this.next();
    }
  }


  constructor() {
    // Expose this to outside scripts
    window['stereo'] = this;
    this.trackIndex = 0;
  }

}
