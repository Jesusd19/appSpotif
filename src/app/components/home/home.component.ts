import { Component } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';
  
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent {
  newSongs: any[] = [];
  loading:boolean;

  constructor( private servicesPotify: SpotifyService ) { 
    this.loading = true;

    this.servicesPotify.getNewReleases()
    .subscribe( (data: any) => {
      this.newSongs = data;
      this.loading = false;

    })    
  }
}
