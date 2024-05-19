import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { environment } from '../environments/environment';
import { SpotifyApi, Track } from '@spotify/web-api-ts-sdk';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: []
})
export class AppComponent implements OnInit {
  @ViewChild('input') input: ElementRef;
  spotifyApi: SpotifyApi;


  async ngOnInit() {
    this.spotifyApi = SpotifyApi.withClientCredentials(environment.SPOTIFY.CLIENT_ID, environment.SPOTIFY.CLIENT_SECRET);
  }

  findSong() {
    this.input.nativeElement.value = '0fv2KH6hac06J86hBUTcSf';
    const trackId = this.input.nativeElement.value;

    this.spotifyApi.tracks.get(trackId).then((track: Track) => {

      alert(track.name + ' by ' + track.artists[0].name + ' from ' + track.album.name + ' released on ' + track.album.release_date);
    }
    ).catch((error: Error) => {
      alert(error);
    });
  }
}