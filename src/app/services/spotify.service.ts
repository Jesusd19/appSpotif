import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) {
    console.log("Spotify services listo");
   }

   getNewReleases() {
     // Este token hay que generarlo para que la app funcione
      const headers =  new HttpHeaders({
        'Authorization':'Bearer BQCmE4yKyLZU_ZQ19Z0qRJ6_dphPAcof2-joz67D1Ux7LiJFqHKCEc0cmm5IjE5KX13NAbFvfbnzXM09yk8'
      })
      // Si queremos limitar agremamos ?limit=20
    return this.http.get('https://api.spotify.com/v1/browse/new-releases?limit=20', { headers });
   }
}
