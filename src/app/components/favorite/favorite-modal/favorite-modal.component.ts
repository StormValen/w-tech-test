import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { FavoriteControllerService } from 'src/app/controllers/favorite/favorite-controller.service';
import { ProductViewModel } from '../../product.model';

@Component({
    selector: 'app-favorite-modal',
    templateUrl: './favorite-modal.component.html',
    styleUrls: ['./favorite-modal.component.scss']
})
export class FavoriteModalComponent implements OnInit, OnDestroy {
    private favoriteProductsListSubscription: Subscription;
    
    constructor(public favoriteController: FavoriteControllerService) { }

    ngOnInit(): void {
        this.favoriteProductsListSubscription = this.favoriteController.favoriteProductList$
            .subscribe((favoriteProductList: ProductViewModel[]) => {
                console.log(favoriteProductList);
            });
    }

    ngOnDestroy(): void {
        this.favoriteProductsListSubscription.unsubscribe();
    }
}
