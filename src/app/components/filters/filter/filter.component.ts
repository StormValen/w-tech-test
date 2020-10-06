import { Component, Input } from '@angular/core';
import { StoreService } from 'src/app/store/store.service';
import { Filter } from '../filters.model';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent {
  @Input() filter: Filter;
  @Input() active: boolean;

  constructor(
      private storeService: StoreService
  ) { }

  public onClickFilter(): void {
    this.storeService.filterProductsByFilterType(this.filter);
  }

}
