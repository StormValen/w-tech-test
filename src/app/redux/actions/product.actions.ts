import { createAction, props } from '@ngrx/store';
import { ProductViewModel } from 'src/app/components/product/product.model';

export const addProduct = createAction(
    '[Product Component] Add Product',
    props<{ product: ProductViewModel }>()
);
export const removeProduct = createAction(
    '[Product Component] Remove Product',
    props<{ product: ProductViewModel }>()
    );
export const updateProduct = createAction(
    '[Product Component] Update Product',
    props<{ product: ProductViewModel }>()
)
export const clearProducts = createAction(
    '[Product Component] Clear Products'
    );
