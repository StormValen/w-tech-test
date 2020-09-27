import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductViewModel } from '../components/product/product.model';
import { Store } from '@ngrx/store';
import * as ProductActions from 'src/app/redux/actions/product.actions';
import * as ProcuctSelectors from 'src/app/redux/selectors/product.selector';

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

    public getProductList(): Observable<ProductViewModel[]> {
        return this.store.select(ProcuctSelectors.getProductList);
    }
}
