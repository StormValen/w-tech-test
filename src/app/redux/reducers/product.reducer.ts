import { Action, createReducer, on } from '@ngrx/store';
import { Filter } from 'src/app/components/filters/filters.model';
import { ProductViewModel } from 'src/app/components/product/product.model';
import * as ProductActions from '../actions/product.actions';

export const productsFeatureKey = 'productsMethod';

export interface ProductsState {
    list: ProductViewModel[];
    activeFilter: Filter;
}

export const initialState: ProductsState = {
    list: [],
    activeFilter: { name: 'Title', icon: 'font'}
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
    on(ProductActions.filterProductsBySearchTerm, (state, {searchTerm}) => {
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
            list: [...newList],
            activeFilter: state.activeFilter
        };
    }),
    on(ProductActions.filterProductsByFilterType, (state, {filter}) => {
        let copyList = [...state.list];
        let newList = [];
        switch (filter.name) {
            case 'Title':
                newList = orderAlphabetically(copyList, 'Title');
                break;
            case 'Description':
                newList = orderAlphabetically(copyList, 'Description');
                break;
            case 'Price (min - max)':
                newList = orderByPrice(copyList, 'min-max');
                break;
            case 'Price (max - min)':
                newList = orderByPrice(copyList, 'max-min');
                break;
            case 'Email':
                newList = orderAlphabetically(copyList, 'Email');
                break;
            default:
                break;
        }
        return {
            ...state,
            list: [...newList],
            activeFilter: filter
        };
    })
);

export function productReducer(state: ProductsState, action: Action) {
    return _productsReducer(state, action);
}

export function orderByPrice(productsList: any, orderToDisplay: string) {
    return productsList.sort((productA, productB) => {
        switch (orderToDisplay) {
            case 'min-max':
                return productA.price - productB.price;
            case 'max-min':
                return productB.price - productA.price;
        }
    })
}

export function orderAlphabetically(productsList: any, fieldToFilter: string) {
    return productsList.sort((productA, productB) => {
        switch (fieldToFilter) {
            case 'Title':
                if (productA.title < productB.title) return -1
                else return 1;
            case 'Description':
                if (productA.description < productB.description) return -1
                else return 1;        
            case 'Email':
                if (productA.email < productB.email) return -1
                else return 1;
            default:
                break;
        }
        
    });
}