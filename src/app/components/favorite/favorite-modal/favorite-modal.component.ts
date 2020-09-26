import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { StoreService } from 'src/app/controllers/store.service';
import { ProductViewModel } from '../../product.model';

@Component({
    selector: 'app-favorite-modal',
    templateUrl: './favorite-modal.component.html',
    styleUrls: ['./favorite-modal.component.scss']
})
export class FavoriteModalComponent {
    public products$: Observable<ProductViewModel[]>;

    constructor(
        private storeService: StoreService
    ) { 
        this.products$ = this.storeService.getProductList();
    }
}
