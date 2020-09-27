import { Component, Input } from '@angular/core';
import { StoreService } from 'src/app/store/store.service';
import { ProductViewModel } from '../product/product.model';

@Component({
    selector: 'app-product',
    templateUrl: './product.component.html',
    styleUrls: ['./product.component.scss']
})
export class ProductComponent {
    @Input() product: ProductViewModel;

    constructor(public storeService: StoreService) { }
}
