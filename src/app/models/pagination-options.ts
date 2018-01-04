import { SortBy, Sort } from '../enums/sort-options.enum';

export class PaginationOptions {
    // Using snake_case because that is what I like to use in query strings
    page = 1;
    page_size = 10;
    sort: SortBy = SortBy.Name;
    order: Sort = Sort.Ascending;

    // TODO: See if there is a built in pattern for this in TS
    static get Default() {
        return new PaginationOptions();
    }
}
