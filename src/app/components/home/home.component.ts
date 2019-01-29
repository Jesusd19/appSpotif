import { Component } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';
  
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent {

  constructor( private servicesPotify: SpotifyService ) { 
    this.servicesPotify.getNewReleases();    
  }
}
