import { TestBed } from '@angular/core/testing';
import { MockStore, provideMockStore } from '@ngrx/store/testing';

import { StoreService } from './store.service';

describe('StoreService', () => {
  let service: StoreService;
  let store: MockStore;
  const initialState = { list: [] };

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ provideMockStore({ initialState })]
    });
    service = TestBed.inject(StoreService);
    store = TestBed.inject(MockStore);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
