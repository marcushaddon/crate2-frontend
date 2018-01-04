import { Component, OnInit } from '@angular/core';
import { ArtistService } from '../services/artist.service';
import { PaginationOptions } from '../models/pagination-options';
import { SortBy } from '../enums/sort-options.enum';

@Component({
  selector: 'app-delete-me',
  templateUrl: './delete-me.component.html',
  styleUrls: ['./delete-me.component.css']
})
export class DeleteMeComponent implements OnInit {

  constructor(private artists: ArtistService) { }

  ngOnInit() {
    this.artists.getArtistTracks('584dc8a1a09826d22ff372d5')
    .subscribe(
      tracks => console.log(tracks),
      err => console.log(err)
    );
  }

}
