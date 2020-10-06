import { Component } from '@angular/core';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss']
})
export class FiltersComponent {
  public filtersList: any[] =
  [
    {name: 'Title', icon: 'font'},
    {name: 'Description', icon: 'align-justify'},
    {name: 'Price', icon: 'euro-sign'},
    {name: 'Mail', icon: 'envelope-open-text'},
  ];

  constructor() { }

  public openFiltersModal(): void {
    console.log('Open modal!');
  }

}
