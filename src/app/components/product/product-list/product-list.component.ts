import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { StoreService } from 'src/app/controllers/store.service';
import { ProductViewModel } from '../../product/product.model';

@Component({
    selector: 'app-product-list',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
    public products$: Observable<ProductViewModel[]>;
    
    constructor(
        private http: HttpClient,
        private storeService: StoreService
    ) { }

    ngOnInit(): void {

        this.http.get<any>('https://frontend-tech-test-data.s3.eu-west-1.amazonaws.com/items.json')
            .subscribe(_res => {
                _res.items.forEach(element => {
                    let product = new ProductViewModel(element);
                    this.storeService.addProduct(product);
                });

                this.products$ = this.storeService.getProductList();
            });

    }

}
