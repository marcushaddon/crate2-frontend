import { Track } from './track';
import { Album } from './album';

export class User {
    public facebookId: string;
    public userName: string;
    public email: string;
    public picUrl: string;
    public joinedOn: Date;
    public bio: string;
    public site: string;
    public twitter: string;
    public soundcloud: string;
    public facebook: string;
    public instagram: string;
    public recentlyListenedItems: Track[];
    public pendingUploads: Album[];
    public favorites: number;
}


export class ShortUser {
    public _id: string;
    public userName: string;
}
