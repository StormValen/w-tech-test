import { Component, ElementRef, OnChanges, SimpleChange, SimpleChanges, ViewChild } from '@angular/core';
import { StoreService } from 'src/app/store/store.service';

@Component({
    selector: 'app-searchbar',
    templateUrl: './searchbar.component.html',
    styleUrls: ['./searchbar.component.scss']
})
export class SearchbarComponent  {
    @ViewChild('searchInput') searchInput: ElementRef;
    public _searchTerm: string = '';

    constructor(private store: StoreService) { }

    public searchTerm(): void {
        this.store.filterProductsBySearchTerm(this._searchTerm);
    }

    public onKeyPressed(event: any): void {
        this._searchTerm = event.target.value;
        this.store.filterProductsBySearchTerm(this._searchTerm);
    }

}
