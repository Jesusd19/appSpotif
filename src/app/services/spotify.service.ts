import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  TOKEN_SPOTIFY: string;

  constructor(private http: HttpClient) {
    this.TOKEN_SPOTIFY = 'BQD4pMbgYmQcNvwhRwFN19VUaEl1tZp0rypDfAShj4QKpnjjBu_rAho_O1GXRBCmpsCTnkWPl4eLm3uGwHM';
    console.log("Spotify services listo");
  }

  getQuery(query: string) {
    const url = `https://api.spotify.com/v1/${query}`;
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.TOKEN_SPOTIFY}`
    })

    return this.http.get(url, { headers });
  }

  getNewReleases() {

    return this.getQuery('browse/new-releases?limit=20')
      .pipe(map(data => data['albums'].items));

    // Este token hay que generarlo para que la app funcione
    // const headers = new HttpHeaders({
    //   'Authorization': `Bearer ${this.TOKEN_SPOTIFY}`
    // })
    // Si queremos limitar agremamos ?limit=20

    // return this.http.get('https://api.spotify.com/v1/browse/new-releases?limit=20', { headers })
    // .pipe(map(data => data['albums'].items));
  }

  getArtists(term: string) {

    return this.getQuery(`search?q=${term}&type=artist&limit=15`)
      .pipe(map(data => data['artists'].items));

    // Este token hay que generarlo para que la app funcione
    // const headers = new HttpHeaders({
    //   'Authorization': `Bearer ${this.TOKEN_SPOTIFY}`
    // })
    // Buscar tipo artista  <
    // return this.http.get(`https://api.spotify.com/v1/search?q=${term}&type=artist&limit=15`, { headers })
    //   .pipe(map(data => data['artists'].items));
  }

  // https://api.spotify.com/v1/artists/{id}

  getArtist(id: string) {
    return this.getQuery(`artists/${id}`)
    // .pipe(map(data => data['artists'].items));      
  }

  getTopTracks(id: string) {
    return this.getQuery(`artists/${id}/top-tracks?country=us`)
      .pipe(map(data => data['tracks']));
  }
}
