import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { FiltersComponent } from './filters.component';

describe('FiltersComponent', () => {
    let component: FiltersComponent;
    let fixture: ComponentFixture<FiltersComponent>;
    let store: MockStore;
    const initialState = {
        list: [],
        favoriteList: [],
        activeFilter: {}
    }

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [FiltersComponent],
            providers: [provideMockStore({ initialState })]
        })
            .compileComponents();

        store = TestBed.inject(MockStore);
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(FiltersComponent);
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
