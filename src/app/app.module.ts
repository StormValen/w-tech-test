import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { ProductComponent } from './components/product/product.component';
import { ProductListComponent } from './components/product/product-list/product-list.component';
import { HeaderComponent } from './components/header/header.component';
import { SearchbarComponent } from './components/searchbar/searchbar.component';
import { FavoriteModalComponent } from './components/favorite/favorite-modal/favorite-modal.component';

import { StoreModule } from '@ngrx/store';
import * as ProductsReducer from './redux/reducers/product.reducer';
import { FavoriteProductComponent } from './components/product/favorite-product/favorite-product.component';

@NgModule({
    declarations: [
        AppComponent,
        ProductComponent,
        ProductListComponent,
        HeaderComponent,
        SearchbarComponent,
        FavoriteModalComponent,
        FavoriteProductComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        StoreModule.forRoot({'productsMethod': ProductsReducer.productReducer})
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
