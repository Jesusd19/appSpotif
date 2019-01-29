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
      const headers =  new HttpHeaders({
        'Authorization':'Bearer BQCL1vhbAsFoTKQandcp7Do-9YR2Of-2Twa9Nhd6DSUb7m55F7vazRlUAZiIl-O59PC8e7OYYzLJWxPIaEw'
      })
      // Si queremos limitar agremamos ?limit=20
     this.http.get('https://api.spotify.com/v1/browse/new-releases?limit=20', { headers })
     .subscribe(data => {
       console.log(data);  
     })
   }
}
