import { Component, Input, OnInit } from '@angular/core';
import { ProductViewModel } from '../product.model';

@Component({
    selector: 'app-product',
    templateUrl: './product.component.html',
    styleUrls: ['./product.component.scss']
})
export class ProductComponent {
    @Input() product: ProductViewModel;

    constructor() { }

}
