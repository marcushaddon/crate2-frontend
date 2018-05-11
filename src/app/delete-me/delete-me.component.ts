import { Component, OnInit } from '@angular/core';
import { ArtistService } from '../services/artist.service';
import { AlbumService } from '../services/album.service';
import { MeService } from '../services/me.service';
import { PaginationOptions } from '../models';
import { SortBy, Sort } from '../enums/sort-options.enum';
import { SearchService } from '../services/search.service';
import { ApiEntity } from '../enums/api-entity.enum';
import {
  Artist,
  Album,
  Playlist,
  Track,
  User,
  ShortUser
} from '../models';

@Component({
  selector: 'app-delete-me',
  templateUrl: './delete-me.component.html',
  styleUrls: ['./delete-me.component.scss']
})
export class DeleteMeComponent implements OnInit {

  constructor(private search: SearchService, private album: AlbumService, private me: MeService) { }

  ngOnInit() {
    this.me.meUpdated
    .subscribe(
      me => {
        console.log('it me');
        if (me) {
          console.log(me);
          this.album.getAlbum('58a4d95b60f6947506d030c7') // NOT WORK
          .subscribe(
            album => {
              console.log('it album');
              this.me.addToCrate(album)
              .subscribe(
                thing => {
                  console.log(thing);
                  console.log('it added');
                }
              );
            }
          );
        }
      }
    );

    this.me.fetchIdentity();

  }

}
