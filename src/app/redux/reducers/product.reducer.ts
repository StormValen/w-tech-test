import { Action, createReducer, on } from '@ngrx/store';
import { ProductViewModel } from 'src/app/components/product/product.model';
import * as ProductActions from '../actions/product.actions';

export const productsFeatureKey = 'productsMethod';

export interface ProductsState {
    list: ProductViewModel[];
}

export const initialState: ProductsState = {
    list: []
};

const _productsReducer = createReducer(
    initialState,
    on(ProductActions.addProduct, (state, { product }) => {
        return {
            ...state,
            list: [...state.list, product]
        }
    }),
    on(ProductActions.updateProduct, (state, { product }) => {
        let copyList = [...state.list];
        let newList = copyList.map(element => {
            if (element === product) {
                return {...element, favorite: !element.favorite};
            }
            return {...element};
        })
        return {
            ...state,
            list: [...newList]
        };
    }),
    on(ProductActions.filterProducts, (state, {searchTerm}) => {
        let copyList = [...state.list];
        let newList = copyList.map(element => {
            if (element.title.includes(searchTerm) || 
                element.description.includes(searchTerm) ||
                element.email.includes(searchTerm) ||
                element.price.toString().includes(searchTerm) ||
                element.image.includes(searchTerm)
                ) {
                return {...element, hidden: false};
            }
            return {...element, hidden: true}
        })
        return {
            ...state,
            list: [...newList]
        };
    })
);

export function productReducer(state: ProductsState, action: Action) {
    return _productsReducer(state, action);
}