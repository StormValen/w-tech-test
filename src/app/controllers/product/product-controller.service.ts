import { HttpClient } from '@angular/common/http';
import { Injectable, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ProductViewModel } from 'src/app/components/product.model';
import { FavoriteControllerService } from '../favorite/favorite-controller.service';

@Injectable({
    providedIn: 'root'
})
export class ProductControllerService implements OnDestroy {
    private apiProductsURL: string = 'https://frontend-tech-test-data.s3.eu-west-1.amazonaws.com';
    private favoriteProductsListSubscription: Subscription;
    public products: ProductViewModel[] = [];

    constructor(
        private http: HttpClient,
        private favoriteController: FavoriteControllerService
        ) {
            this.favoriteProductsListSubscription = this.favoriteController.favoriteProductList$
                .subscribe((favoriteProductList: ProductViewModel[]) => {
                    this.reassingNonFavoriteItems(favoriteProductList);
                });
        }

    private reassingNonFavoriteItems(favoriteProductList: ProductViewModel[]): void {
        // this.products.forEach(product => product.)
    }

    public async getProductsData() {
        let asyncProductsResponse = await this.http.get<any>(`${this.apiProductsURL}/items.json`).toPromise();
        asyncProductsResponse.items.forEach(element => {
            let product = new ProductViewModel(element);
            this.products.push(product);
        });
    }

    ngOnDestroy(): void {
        this.favoriteProductsListSubscription.unsubscribe();
    }
}
