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
  error: boolean; 
  messageError: string;

  constructor( private servicesPotify: SpotifyService ) { 
    this.loading = true;
    this.error = false;

    this.servicesPotify.getNewReleases()
    .subscribe( (data: any) => {
      this.newSongs = data;
      this.loading = false;

    }, ( errorServicio ) => {
      this.loading = false;
      this.error = true;
      console.log(errorServicio);
      this.messageError = errorServicio;
      
      
    })    
  }
}
