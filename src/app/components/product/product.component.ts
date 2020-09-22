import { Component, Input, OnInit } from '@angular/core';
import { FavoriteControllerService } from 'src/app/controllers/favorite/favorite-controller.service';
import { ProductViewModel } from '../product.model';

@Component({
    selector: 'app-product',
    templateUrl: './product.component.html',
    styleUrls: ['./product.component.scss']
})
export class ProductComponent {
    @Input() product: ProductViewModel;

    constructor(
        private favoriteController: FavoriteControllerService
    ) { }
    
    public onClickFavorite(): void {
        this.product.getFavorite() ? this.favoriteController.removeFavoriteProduct(this.product) : this.favoriteController.addFavoriteProduct(this.product);
        this.product.toggleFavorite();
    }
}
