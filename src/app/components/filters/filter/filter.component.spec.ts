import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { FilterComponent } from './filter.component';

describe('FilterComponent', () => {
    let component: FilterComponent;
    let fixture: ComponentFixture<FilterComponent>;
    let store: MockStore;
    const initialState = {
        list: [],
        favoriteList: [],
        activeFilter: {}
    }

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [FilterComponent],
            providers: [provideMockStore({ initialState })]
        })
            .compileComponents();

        store = TestBed.inject(MockStore);
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(FilterComponent);
        component = fixture.componentInstance;
        component.filter = { name: 'Title', icon: 'font' };
        component.active = false;
        fixture.detectChanges();
    });

    afterEach(() => {
        fixture.destroy();
      });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
