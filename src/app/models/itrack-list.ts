import { Track } from '../models';

export interface ITrackList {
    _id: string;
    uri: string;
    
    tracks: Track[];
}
