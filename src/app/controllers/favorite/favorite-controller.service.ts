import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { ProductViewModel } from 'src/app/components/product/product.model';

@Injectable({
    providedIn: 'root'
})
export class FavoriteControllerService {
    private favoriteProductList: ProductViewModel[] = [];
    private favoriteProductListSource = new ReplaySubject<ProductViewModel[]>();
    private favoriteProductDeletedSource = new ReplaySubject<ProductViewModel>();
    public favoriteProductList$ = this.favoriteProductListSource.asObservable();
    public favoriteProductDeleted$ = this.favoriteProductDeletedSource.asObservable();

    constructor() { }

    private notifyProductListChanges(): void {
        this.favoriteProductListSource.next(this.favoriteProductList);
    }
    
    public addFavoriteProduct(productToAdd: ProductViewModel): void {
        this.favoriteProductList.push(productToAdd);
        this.notifyProductListChanges();
    }

    public removeFavoriteProduct(productToRemove: ProductViewModel): void {
        this.favoriteProductList = this.favoriteProductList.filter(product => product !== productToRemove);
        this.favoriteProductDeletedSource.next(productToRemove);
        this.notifyProductListChanges();
    }

    public getFavoriteProductList(): ProductViewModel[] {
        return this.favoriteProductList;
    }

    public clearFavoriteProductList(): void {
        this.favoriteProductList = [];
    }


}