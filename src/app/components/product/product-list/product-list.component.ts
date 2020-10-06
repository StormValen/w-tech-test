import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { StoreService } from 'src/app/store/store.service';
import { ProductViewModel } from '../../product/product.model';

@Component({
    selector: 'app-product-list',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
    public products$: Observable<ProductViewModel[]>;
    public loading: boolean = true;
    public productsDisplayed: number;
    public maxProductsDisplayed: number;

    constructor(
        private http: HttpClient,
        private storeService: StoreService
    ) { }

    ngOnInit(): void {
        this.loading = true;
        this.http.get<any>('https://frontend-tech-test-data.s3.eu-west-1.amazonaws.com/items.json')
            .subscribe(_res => {
                _res.items.forEach(element => {
                    let product = new ProductViewModel(element);
                    this.storeService.addProduct(product);
                });
                this.products$ = this.storeService.getProductList();
                this.initializeProductsDisplayed();
                this.loading = false;
            });

    }

    public loadMoreProducts() {
      this.loading = true;
      setTimeout(() => {
        if (this.productsDisplayed <= this.maxProductsDisplayed) {
          this.productsDisplayed = this.productsDisplayed + 5;
        }
        this.loading = false;
      }, 500);
    }

    private initializeProductsDisplayed(): void {
      let productsSubscription = this.products$.subscribe(
        (products: ProductViewModel[]) => {
          if(products.length !== 0) {
            this.productsDisplayed = 5;
            this.maxProductsDisplayed = products.length;
          }
        })
      productsSubscription.unsubscribe();
    }

}
