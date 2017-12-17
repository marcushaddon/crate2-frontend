import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { StereoService } from '../services/stereo.service';
import { ITrackList, Track, Album, Playlist } from '../models';

declare const albumA: Album; // TESTING
declare const tracksA: Track[];
declare const playlistB: Playlist;

@Component({
  selector: 'stereo-controls',
  templateUrl: './stereo-controls.component.html',
  styleUrls: ['./stereo-controls.component.css']
})
export class StereoControlsComponent implements OnInit {

  constructor(public stereo: StereoService, private ref: ChangeDetectorRef) { }
  state: number;
  tracklists: ITrackList[];
  startTime = 0;
  stopTime = 100;
  currentTime = 0;

  ngOnInit() {
    this.state = 0;
    this.tracklists = [
      albumA,
      playlistB
    ];
    this.stereo.stateChanged
    .subscribe(
      (state) => {
        this.currentTime = this.stereo.videoProgress;
        this.state = state;
        this.ref.detectChanges();
      },
      (err) => console.log(err)
    );


    this.stereo.trackChanged
    .subscribe(
      (track) => {
        if (track) {
          this.startTime = track.begin;
          this.stopTime = track.stop;
          this.ref.detectChanges();
        }
      }
    );


  }

  playToggle() {
    this.stereo.togglePlay();
  }

  next() {
    this.stereo.next();
  }

  back() {
    this.stereo.back();
  }

  seek(event) {
    const time = event.target.value;
    console.log(time);
  }

  cueList(tracklist: ITrackList) {
    // Example of how components may be responsible for determining
    // if a tracklist is ready to be queueed or if its tracks must be fetched first
    // (imaging this was calling an API service instead)
    if (!tracklist.tracks) {
      tracklist.tracks = tracksA;
    }
    this.stereo.cueTracklist(tracklist);
  }


}
