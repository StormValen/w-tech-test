import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ProductViewModel } from '../product.model';

@Component({
    selector: 'app-favorite-product',
    templateUrl: './favorite-product.component.html',
    styleUrls: ['./favorite-product.component.scss']
})
export class FavoriteProductComponent {
    @Input() product: ProductViewModel;
    @Output() deleteProduct = new EventEmitter<boolean>();

    constructor() { }

    public delete(): void {
        this.deleteProduct.emit(true);
    }

}
