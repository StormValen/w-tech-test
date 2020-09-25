import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoriteModalComponent } from './favorite-modal.component';

describe('FavoriteModalComponent', () => {
  let component: FavoriteModalComponent;
  let fixture: ComponentFixture<FavoriteModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FavoriteModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FavoriteModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
