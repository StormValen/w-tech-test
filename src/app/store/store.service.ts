import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductViewModel } from '../components/product/product.model';
import { Store } from '@ngrx/store';
import * as ProductActions from 'src/app/redux/actions/product.actions';
import * as ProcuctSelectors from 'src/app/redux/selectors/product.selector';
import { Filter } from '../components/filters/filters.model';

@Injectable({
    providedIn: 'root'
})
export class StoreService {

    constructor(
        private store: Store<ProductViewModel[]>
    ) { }

    public addProduct(product: ProductViewModel): void {
        return this.store.dispatch(
            ProductActions.addProduct({ 
                product: product
            })
        );
    }

    public updateProduct(product: ProductViewModel): void {
        return this.store.dispatch(
            ProductActions.updateProduct({
                product: product
            })
        )
    }

    public filterProductsBySearchTerm(_searchTerm: string, _case: string): void {
        return this.store.dispatch(
            ProductActions.filterProductsBySearchTerm({
                search: {searchTerm: _searchTerm, case: _case}
            })
        )
    }

    public filterProductsByFilterType(filter: Filter): void {  
        return this.store.dispatch(
            ProductActions.filterProductsByFilterType({
                filter: filter
            })
        )
    }

    public getProductList(): Observable<ProductViewModel[]> {
        return this.store.select(ProcuctSelectors.getProductList);
    }

    public getFavoriteProductList(): Observable<ProductViewModel[]> {
        return this.store.select(ProcuctSelectors.getProductFavoriteList);
    }

    public getProductActiveFilter(): Observable<Filter> {
        return this.store.select(ProcuctSelectors.getProductActiveFilter);
    }
}
