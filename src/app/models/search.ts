import { ApiEntity } from '../enums/api-entity.enum';

export class Search {
    search: string;
    entity: ApiEntity;

    constructor(search: string, entity: ApiEntity) {
        this.search = search;
        this.entity = entity;
    }
}
