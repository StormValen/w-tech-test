import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent {
  @Input() filter: { name: string, icon: string};
  @Input() active: boolean;

  constructor() { }

  public onClickFilter(): void {
    console.log(this.filter.name);
  }

}
