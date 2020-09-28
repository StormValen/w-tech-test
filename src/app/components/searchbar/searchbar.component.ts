import { Component } from '@angular/core';
import { StoreService } from 'src/app/store/store.service';

@Component({
    selector: 'app-searchbar',
    templateUrl: './searchbar.component.html',
    styleUrls: ['./searchbar.component.scss']
})
export class SearchbarComponent {
    public _searchTerm: string = '';

    constructor(private store: StoreService) { }

    public searchTerm(): void {
        this.store.filterProducts(this._searchTerm);
    }

}
