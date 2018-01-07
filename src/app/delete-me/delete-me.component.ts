import { Component, OnInit } from '@angular/core';
import { ArtistService } from '../services/artist.service';
import { AlbumService } from '../services/album.service';
import { MeService } from '../services/me.service';
import { PaginationOptions } from '../models';
import { SortBy, Sort } from '../enums/sort-options.enum';
import { SearchService } from '../services/search.service';
import { ApiEntity } from '../enums/api-entity.enum';

@Component({
  selector: 'app-delete-me',
  templateUrl: './delete-me.component.html',
  styleUrls: ['./delete-me.component.css']
})
export class DeleteMeComponent implements OnInit {

  constructor(private search: SearchService) { }

  ngOnInit() {
    this.search.search('yas', ApiEntity.Artists)
    .subscribe(
      (results) => console.log(results)
    );
  }

}
