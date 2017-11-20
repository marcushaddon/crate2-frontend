import { ITrackList } from './itrack-list';

export class Track {
    public _id: string;
    public trackNum: number;
    public trackName: string; // TEMPORARY
    public name: string;
    public albumName: string;
    public albumId: string;
    public artistId: string;
    public videoId: string;
    public begin: number;
    public stop: number;
    public favorites: number;
    public listens: number;
    public iLikeThis: boolean;

    get duration() {
        return this.stop - this.begin;
    }

    get uri() {
        return '/tracks/' + this._id;
    }
}


