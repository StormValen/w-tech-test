import { TestBed } from '@angular/core/testing';
import { ProductModel, ProductViewModel } from 'src/app/components/product/product.model';

import { FavoriteControllerService } from './favorite-controller.service';

describe('FavoriteControllerService', () => {
    let service: FavoriteControllerService;
    let testProduct: ProductViewModel = new ProductViewModel({
        title: 'test-title',
        description: 'test-description',
        email: 'test-email@email.com',
        price: '1',
        image: 'test-image.png'
    });

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(FavoriteControllerService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    it('should add product to favorite list', () => {
        service.addFavoriteProduct(testProduct);
        expect(service.getFavoriteProductList().length).toEqual(1);
    })

    it('should remove product from favorite list', () => {
        service.addFavoriteProduct(testProduct);
        service.removeFavoriteProduct(testProduct);
        expect(service.getFavoriteProductList().length).toEqual(0);
    })

    it('should clear favorite list', () => {
        service.addFavoriteProduct(testProduct);
        service.clearFavoriteProductList()
        expect(service.getFavoriteProductList().length).toEqual(0);
    })

    it('should notify others components of favorite list changes', () => {
        service.favoriteProductList$
            .subscribe((favoriteProductList: ProductViewModel[]) => {
                expect(favoriteProductList.length).toEqual(1);
            });
        service.addFavoriteProduct(testProduct);
    })
});
