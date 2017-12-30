import { ShortUser } from './user';
import { Track } from './track';
import { ITrackList } from './itrack-list';

export class Playlist implements ITrackList {
    public _id: string;
    public listType: string;
    public name: string;
    public description: string;
    public imgUrl: string;
    public dateCreated: Date;
    public createdBy: ShortUser;
    public tags: string[];
    public tracks: Track[];
    public favorites: number;
    public listens: number;
    public iLikeThis: boolean;

    get uri() {
        return '/playlists/' + this._id;
    }

    getTracks() {
        
    }
}


