import { createFeatureSelector, createSelector } from '@ngrx/store';
import { productsFeatureKey, ProductsState } from '../reducers/product.reducer';

export const getProductState = createFeatureSelector<ProductsState>(productsFeatureKey);

export const getProductList = createSelector(
    getProductState,
    (state: ProductsState) => state.list
  );

export const getProductActiveFilter = createSelector(
    getProductState,
    (state: ProductsState) => state.activeFilter
)