import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { FavoriteControllerService } from 'src/app/controllers/favorite/favorite-controller.service';
import { ProductViewModel } from '../../product.model';

@Component({
    selector: 'app-product-list',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit, OnDestroy {
    private favoriteProductsListSubscription: Subscription; // TODO: esto no va aqui, va en el modal de favs
    public products: ProductViewModel[] = [];
    

    constructor(
        private http: HttpClient,
        private favoriteController: FavoriteControllerService
    ) { }

    ngOnInit(): void {
        // TODO: Esto no va aqui va en el modal de favs.
        this.favoriteProductsListSubscription = this.favoriteController.favoriteProductList$
            .subscribe((favoriteProductList: ProductViewModel[]) => {
                console.log(favoriteProductList);
            });

        this.http.get<any>('https://frontend-tech-test-data.s3.eu-west-1.amazonaws.com/items.json')
            .subscribe(_res => {
                _res.items.forEach(element => {
                    let product = new ProductViewModel(element);
                    this.products.push(product);
                });
            });

    }

    ngOnDestroy(): void {
        this.favoriteProductsListSubscription.unsubscribe();
    }

}
