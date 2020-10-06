import { createAction, props } from '@ngrx/store';
import { Filter } from 'src/app/components/filters/filters.model';
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

export const filterProductsBySearchTerm = createAction(
    '[Product Component] Filter Products',
    props<{ searchTerm: string }>()
);

export const filterProductsByFilterType = createAction(
    '[Product Component] Filter Products by FilterType',
    props<{ filter: Filter }>()
)
