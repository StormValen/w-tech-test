import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { FavoriteModalComponent } from './favorite-modal.component';

describe('FavoriteModalComponent', () => {
    let component: FavoriteModalComponent;
    let fixture: ComponentFixture<FavoriteModalComponent>;
    let store: MockStore;
    const initialState = { list: [] };

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [FavoriteModalComponent],
            providers: [provideMockStore({ initialState })]
        })
            .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(FavoriteModalComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
});
