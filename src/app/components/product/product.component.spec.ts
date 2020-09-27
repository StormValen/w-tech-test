import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductModel, ProductViewModel } from '../product/product.model';
import { ProductComponent } from './product.component';

describe('ProductComponent', () => {
    let component: ProductComponent;
    let fixture: ComponentFixture<ProductComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [ProductComponent]
        })
            .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(ProductComponent);
        component = fixture.componentInstance;
        let _product: ProductModel = {
            title: 'test-title',
            description: 'test-description',
            email: 'test-email@email.com',
            price: '1',
            image: 'test-image.png',
        }
        component.product = new ProductViewModel(_product);
        fixture.detectChanges();
    });

    it('should initialize product variables', () => {
        expect(component.product.getTitle()).toEqual('test-title');
        expect(component.product.getDescription()).toEqual('test-description');
        expect(component.product.getEmail()).toEqual('test-email@email.com');
        expect(component.product.getPrice()).toEqual(1);
        expect(component.product.getImageUrl()).toEqual('test-image.png');
        expect(component.product.getFavorite()).toEqual(false);
    });

    it('should toggle favorite', () => {
        component.product.toggleFavorite()
        expect(component.product.getFavorite()).toEqual(true);
    })
});
