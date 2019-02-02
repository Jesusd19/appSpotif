
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styles: []
})
export class ArtistComponent {
  artist: any = {};
  loading:boolean;

  constructor(private activateRouter: ActivatedRoute, private spotify: SpotifyService) {
    this.activateRouter.params.subscribe(params => {
      this.getArtist(params['id']);
    });
  }

  getArtist( id: string) {
    this.loading=true;
    this.spotify.getArtist(id).subscribe(artist =>{
      console.log(artist);
      this.artist = artist;
      this.loading=false;      
    });
    
  }

}
