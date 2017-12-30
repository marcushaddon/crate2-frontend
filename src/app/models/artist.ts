import { DiscogsEntity } from './discogs-entity';

export class Artist extends DiscogsEntity {
    public _id: string;
    public name: string;
    public bio: string; 
    public link: string;
    public imgUrl: string;
    public imgs: string;
    public aka: string[];
    public tags: string[];
    public favorites: number;
    public listens: number;
    public iLikeThis: boolean;
}


