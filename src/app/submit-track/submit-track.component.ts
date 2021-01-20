import { Component, OnInit } from '@angular/core';

import { Track, Slots, Musics } from '../track';
import { TrackService } from '../track.service';

@Component({
  selector: 'app-submit-track',
  templateUrl: './submit-track.component.html',
  styleUrls: ['./submit-track.component.css']
})
export class SubmitTrackComponent implements OnInit {

  track: Track;
  returnedTrack;

  slots = Slots;
  musics = Musics;

  constructor(
    private trackService: TrackService
  ) { }

  ngOnInit(): void {
    this.initTrack();
  }

  initTrack(): void {
    this.track = {
      phase: "pending",
      name: "",
      version: "",
      authors: [""],
      dlLink: "",
      slot: "LC",
      music: "LC",
      submissionNotes: "",
      submissionDate: undefined,
      submitterID: "",
      selected: false
    };
  }

  submitTrack(): void {
    this.trackService.submitTrack(this.track).subscribe(returnedTrack => this.returnedTrack = returnedTrack);
    this.initTrack();
  }

}
