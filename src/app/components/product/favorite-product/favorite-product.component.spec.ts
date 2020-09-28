import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductModel, ProductViewModel } from '../product.model';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { FavoriteProductComponent } from './favorite-product.component';

describe('FavoriteProductComponent', () => {
  let component: FavoriteProductComponent;
  let fixture: ComponentFixture<FavoriteProductComponent>;
  let store: MockStore;
  const initialState = { list: [] };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FavoriteProductComponent ],
      providers: [ provideMockStore({ initialState })]
    })
    .compileComponents();

    store = TestBed.inject(MockStore);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FavoriteProductComponent);
    component = fixture.componentInstance;
    let _product: ProductModel = {
      title: 'test-title',
      description: 'test-description',
      email: 'test-email@email.com',
      price: '1',
      image: 'test-image.png'
    }
    component.product = new ProductViewModel(_product);
    fixture.detectChanges();
  });

  it('should initialize product variables', () => {
    expect(component.product.title).toEqual('test-title');
    expect(component.product.description).toEqual('test-description');
    expect(component.product.email).toEqual('test-email@email.com');
    expect(component.product.price).toEqual(1);
    expect(component.product.image).toEqual('test-image.png');
    expect(component.product.favorite).toEqual(false);
  });
});
