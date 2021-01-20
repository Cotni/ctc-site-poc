import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Track } from '../track';
import { TrackService } from '../track.service';


@Component({
  selector: 'app-tracklist',
  templateUrl: './tracklist.component.html',
  styleUrls: ['./tracklist.component.css']
})
export class TracklistComponent implements OnInit {

  tracklist: Track[];
  phase: string;

  constructor(
    private trackService: TrackService,
    private route: ActivatedRoute
  ) {
    this.phase = this.route.snapshot.paramMap.get('phase');
  }

  ngOnInit(): void {
    this.getTracklist();
  }

  getTracklist(): void {
    this.trackService.getTracksByPhase(this.phase).subscribe(tracklist => this.tracklist = tracklist);
  }

  // Create a comma-separated list of authors for rendering purposes
  getAuthors(track: Track): string {
    var authors = track.authors[0];
    for (var i = 1; i < track.authors.length; i++) {
      authors += ", " + track.authors[i];
    }
    return authors;
  }

}
