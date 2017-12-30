import { Observable } from 'rxjs/Rx';

import { DiscogsEntity } from './discogs-entity';
import { ITrackList } from './itrack-list';
import { Track } from './track';
import { User, ShortUser } from './user';


export class Album extends DiscogsEntity implements ITrackList {
    public _id: string;
    public name: string;
    public artist: string;
    public artistId: string;
    public noTracks: string;
    public foundBy: ShortUser;
    public foundOn: Date;
    public imgUrl: string;
    public tags: string[];
    public genres: string[];
    public contributers: User[];
    public notes: string;
    public year: string;
    public country: string;
    public favorites: number;
    public listens: number;
    public iLikeThis: number;

    public tracks: Track[];

    get uri() {
        return '/albums/' + this._id;
    }

}

