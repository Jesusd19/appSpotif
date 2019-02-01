import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  TOKEN_SPOTIFY: string;

  constructor(private http: HttpClient) {
    this.TOKEN_SPOTIFY = 'BQC534TUNElYH-aWznRWXN7vc7HN-fEQTyJ7dlTq9NK99LaNqMwTqlwjJjXi9EbNvB53sbAOnazTvBk7ey0';
    console.log("Spotify services listo");
  }

  getNewReleases() {
    // Este token hay que generarlo para que la app funcione
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${ this.TOKEN_SPOTIFY }`
    })
    // Si queremos limitar agremamos ?limit=20
    return this.http.get('https://api.spotify.com/v1/browse/new-releases?limit=20', { headers });
  }

  getArtist(term: string) {
    // Este token hay que generarlo para que la app funcione
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${ this.TOKEN_SPOTIFY }`
    })
    // Buscar tipo artista  
    return this.http.get(`https://api.spotify.com/v1/search?q=${term}&type=artist&limit=15`, { headers });
  }
}
