import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { FilterHeaderComponent } from './filter-header.component';

describe('FilterHeaderComponent', () => {
    let component: FilterHeaderComponent;
    let fixture: ComponentFixture<FilterHeaderComponent>;
    let store: MockStore;
    const initialState = {
        list: [],
        favoriteList: [],
        activeFilter: {}
    };

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [FilterHeaderComponent],
            providers: [ provideMockStore({ initialState })]
        })
            .compileComponents();

        store = TestBed.inject(MockStore);
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(FilterHeaderComponent);
        component = fixture.componentInstance;
        component.activeFilter = { name: 'Title', icon: 'font' }; 
        fixture.detectChanges();
    });

    afterEach(() => {
        fixture.destroy();
      });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
