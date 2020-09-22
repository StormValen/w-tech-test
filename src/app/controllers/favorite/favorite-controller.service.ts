import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { ProductViewModel } from 'src/app/components/product.model';

@Injectable({
    providedIn: 'root'
})
export class FavoriteControllerService {
    private favoriteProductList: ProductViewModel[] = [];
    private favoriteProductListSource = new ReplaySubject<ProductViewModel[]>();
    public favoriteProductList$ = this.favoriteProductListSource.asObservable();

    constructor() { }

    public addFavoriteProduct(productToAdd: ProductViewModel): void {
        this.favoriteProductList.push(productToAdd);
        this.notifyProductListChanges();
    }

    public removeFavoriteProduct(productToRemove: ProductViewModel): void {
        this.favoriteProductList = this.favoriteProductList.filter(product => product !== productToRemove);
        this.notifyProductListChanges();
    }

    public getFavoriteProductList(): ProductViewModel[] {
        return this.favoriteProductList;
    }

    public clearFavoriteProductList(): void {
        this.favoriteProductList = [];
    }

    private notifyProductListChanges(): void {
        this.favoriteProductListSource.next(this.favoriteProductList);
    }

    

}
