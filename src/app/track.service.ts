import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Track } from './track';

@Injectable({
  providedIn: 'root'
})

export class TrackService {

  private trackUrl = 'api/track/';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { };

  getTracksByPhase(phase: string): Observable<Track[]> {
    return this.http.get<Track[]>(this.trackUrl + "cat/" + phase)
    .pipe(
      catchError(this.handleError<Track[]>('getTracksByPhase'))
    );
  };

  submitTrack(track: Track): Observable<Track> {
    return this.http.post<Track>(this.trackUrl + "submit/", track, this.httpOptions).pipe(
      catchError(this.handleError<Track>('submitTrack'))
    );
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      //this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
