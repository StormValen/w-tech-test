import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { StoreService } from 'src/app/store/store.service';
import { ProductViewModel } from '../../product/product.model';

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
