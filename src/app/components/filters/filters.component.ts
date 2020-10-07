import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { StoreService } from 'src/app/store/store.service';
import { Filter } from './filters.model';
import FiltersJson from './filters.json';

@Component({
    selector: 'app-filters',
    templateUrl: './filters.component.html',
    styleUrls: ['./filters.component.scss']
})
export class FiltersComponent implements OnInit, OnDestroy {
    public activeFilter: Filter;
    public filtersList;

    private activeFilterSubscription: Subscription;

    constructor(
        private storeService: StoreService
    ) { 
        this.filtersList = [...FiltersJson.filters];
    }

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
