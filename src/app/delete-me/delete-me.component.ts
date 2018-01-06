import { Component, OnInit } from '@angular/core';
import { ArtistService } from '../services/artist.service';
import { UserService } from '../services/user.service';
import { MeService } from '../services/me.service';
import { PaginationOptions } from '../models/pagination-options';
import { SortBy } from '../enums/sort-options.enum';

@Component({
  selector: 'app-delete-me',
  templateUrl: './delete-me.component.html',
  styleUrls: ['./delete-me.component.css']
})
export class DeleteMeComponent implements OnInit {

  constructor(private user: UserService, private me: MeService) { }

  ngOnInit() {
    this.user.getUserCrateTracks('5a431681ef6b012eedac021c')
    .subscribe(
      user => console.log(user),
      err => console.log(err)
    );

  }

}
