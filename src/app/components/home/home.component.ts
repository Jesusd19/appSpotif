import { Component } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';
  
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent {
  newSongs: any[] = [];

  constructor( private servicesPotify: SpotifyService ) { 
    this.servicesPotify.getNewReleases()
    .subscribe( (data: any) => {
      console.log(data.albums.items);
      this.newSongs = data.albums.items;
    })    
  }
}
