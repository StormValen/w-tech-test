import { Action, createReducer, on } from '@ngrx/store';
import { Filter } from 'src/app/components/filters/filters.model';
import { ProductViewModel } from 'src/app/components/product/product.model';
import * as ProductActions from '../actions/product.actions';

export const productsFeatureKey = 'productsMethod';

export interface ProductsState {
    list: ProductViewModel[];
    favoriteList: ProductViewModel[];
    activeFilter: Filter;
}

export const initialState: ProductsState = {
    list: [],
    favoriteList: [],
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
            if (element.title === product.title) {
                return {...element, favorite: !element.favorite};
            }
            return {...element};
        })

        let copyFavoriteList = [...state.favoriteList];
        let newFavoriteList = [];
        if (copyFavoriteList.find(element => element.title === product.title)) {
            newFavoriteList = copyFavoriteList.filter(element => element.title !== product.title);
        } else {
            newFavoriteList = [...copyFavoriteList, {...product, favorite: !product.favorite}];
        }

        return {
            ...state,
            list: [...newList],
            favoriteList:[...newFavoriteList] 
        };
    }),
    on(ProductActions.filterProductsBySearchTerm, (state, {search}) => {
        let copyList = [...state.list];
        let newList = [];
        switch (search.case) {
            case 'Favorites':
                copyList = [...state.favoriteList];
                newList = copyList.map(element => {
                    if (element.title.includes(search.searchTerm) || 
                        element.description.includes(search.searchTerm) ||
                        element.email.includes(search.searchTerm) ||
                        element.price.toString().includes(search.searchTerm) ||
                        element.image.includes(search.searchTerm)
                        ) {
                        return {...element, hidden: false};
                    }
                    return {...element, hidden: true}
                })
                return {
                    ...state,
                    favoriteList: [...newList],
                    activeFilter: state.activeFilter
                };
            case 'All':
                copyList = [...state.list];
                newList = copyList.map(element => {
                    if (element.title.includes(search.searchTerm) || 
                        element.description.includes(search.searchTerm) ||
                        element.email.includes(search.searchTerm) ||
                        element.price.toString().includes(search.searchTerm) ||
                        element.image.includes(search.searchTerm)
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
            default:
                break;
        }
        
        
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