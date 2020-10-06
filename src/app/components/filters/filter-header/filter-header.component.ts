import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { StoreService } from 'src/app/store/store.service';
import { Filter } from '../filters.model';

@Component({
    selector: 'app-filter-header',
    templateUrl: './filter-header.component.html',
    styleUrls: ['./filter-header.component.scss']
})
export class FilterHeaderComponent implements OnInit, OnDestroy {
    public activeFilter: Filter;
    private activeFilterSubscription: Subscription;

    constructor(
        private storeService: StoreService
    ) { }

    ngOnInit(): void {
        this.activeFilterSubscription = this.storeService.getProductActiveFilter()
            .subscribe(activeFilter => {
                this.activeFilter = activeFilter;
            })
    }

    ngOnDestroy(): void {
        this.activeFilterSubscription.unsubscribe();
    }

}
