import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { StoreService } from 'src/app/store/store.service';
import { Filter } from './filters.model';

@Component({
    selector: 'app-filters',
    templateUrl: './filters.component.html',
    styleUrls: ['./filters.component.scss']
})
export class FiltersComponent implements OnInit, OnDestroy {
    public activeFilter: Filter;
    public filtersList: Filter[] = [
        { name: 'Title', icon: 'font' },
        { name: 'Description', icon: 'align-justify' },
        { name: 'Price (min - max)', icon: 'euro-sign' },
        { name: 'Price (max - min)', icon: 'euro-sign' },
        { name: 'Email', icon: 'envelope-open-text' },
    ];

    private activeFilterSubscription: Subscription;

    constructor(
        private storeService: StoreService
    ) { }

    ngOnInit(): void {
        this.storeService.filterProductsByFilterType(this.filtersList[0]);
        this.activeFilterSubscription = this.storeService.getProductActiveFilter()
            .subscribe((activeFilter: Filter) => {
                this.activeFilter = activeFilter;
            })
    }

    ngOnDestroy(): void {
        this.activeFilterSubscription.unsubscribe();
    }
}
