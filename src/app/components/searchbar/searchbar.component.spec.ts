import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { SearchbarComponent } from './searchbar.component';

describe('SearchbarComponent', () => {
    let component: SearchbarComponent;
    let fixture: ComponentFixture<SearchbarComponent>;
    let store: MockStore;
    const initialState = { 
        list: [],
        favoriteList: [],
        activeFilter: {}
    };
    
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [SearchbarComponent],
            providers: [provideMockStore({ initialState })]
        })
            .compileComponents();

        store = TestBed.inject(MockStore);
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(SearchbarComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    afterEach(() => {
        fixture.destroy();
      });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
