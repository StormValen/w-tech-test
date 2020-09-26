import { Component, Input } from '@angular/core';
import { StoreService } from 'src/app/controllers/store.service';
import { ProductModel, ProductViewModel } from '../product.model';

@Component({
    selector: 'app-product',
    templateUrl: './product.component.html',
    styleUrls: ['./product.component.scss']
})
export class ProductComponent {
    @Input() product: ProductViewModel;

    constructor(
        private storeService: StoreService
    ) { }
    
    public onClickFavorite(): void {
        this.storeService.updateProduct(this.product);
    }
}
