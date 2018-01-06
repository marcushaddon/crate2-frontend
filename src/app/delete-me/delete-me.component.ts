import { Component, OnInit } from '@angular/core';
import { ArtistService } from '../services/artist.service';
import { AlbumService } from '../services/album.service';
import { MeService } from '../services/me.service';
import { PaginationOptions } from '../models';
import { SortBy, Sort } from '../enums/sort-options.enum';

@Component({
  selector: 'app-delete-me',
  templateUrl: './delete-me.component.html',
  styleUrls: ['./delete-me.component.css']
})
export class DeleteMeComponent implements OnInit {

  constructor(private albums: AlbumService, private me: MeService) { }

  ngOnInit() {
    const page = new PaginationOptions();
    console.log(page);
    this.albums.getAlbums(page)
    .subscribe(
      albums => console.log(albums)
    );

  }

}
