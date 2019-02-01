import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  TOKEN_SPOTIFY: string;

  constructor(private http: HttpClient) {
    this.TOKEN_SPOTIFY = 'BQD3Bw3eL5nAKcg65i0bvnrxhTf2W2p3A5cVNX33SmBPGCt1Y3E91CIwWwzp4mHGIOUvM8OM9sO3-HAP_QE';
    console.log("Spotify services listo");
  }

  getNewReleases() {
    // Este token hay que generarlo para que la app funcione
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.TOKEN_SPOTIFY}`
    })
    // Si queremos limitar agremamos ?limit=20
    return this.http.get('https://api.spotify.com/v1/browse/new-releases?limit=20', { headers })
      .pipe(map(data => data['albums'].items));
  }

  getArtist(term: string) {
    // Este token hay que generarlo para que la app funcione
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.TOKEN_SPOTIFY}`
    })
    // Buscar tipo artista  <
    return this.http.get(`https://api.spotify.com/v1/search?q=${term}&type=artist&limit=15`, { headers })
      .pipe(map(data => data['artists'].items));
  }
}
