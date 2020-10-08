import { Component, ElementRef, Input, OnChanges, SimpleChange, SimpleChanges, ViewChild } from '@angular/core';
import { StoreService } from 'src/app/store/store.service';

@Component({
    selector: 'app-searchbar',
    templateUrl: './searchbar.component.html',
    styleUrls: ['./searchbar.component.scss']
})
export class SearchbarComponent  {
    @ViewChild('searchInput') searchInput: ElementRef;
    @Input() case: string;
    public _searchTerm: string = '';

    constructor(private store: StoreService) { }

    public searchTerm(): void {
        this.store.filterProductsBySearchTerm(this._searchTerm, this.case);
    }

    public onKeyPressed(event: any): void {
        this._searchTerm = event.target.value;
        this.store.filterProductsBySearchTerm(this._searchTerm, this.case);
    }

}
