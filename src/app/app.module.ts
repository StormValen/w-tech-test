import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ProductComponent } from './components/product/product.component';
import { ProductListComponent } from './components/product/product-list/product-list.component';
import { HeaderComponent } from './components/header/header.component';
import { SearchbarComponent } from './components/searchbar/searchbar.component';
import { FavoriteModalComponent } from './components/favorite/favorite-modal/favorite-modal.component';
import { FavoriteProductComponent } from './components/product/favorite-product/favorite-product.component';

import { StoreModule } from '@ngrx/store';
import * as ProductsReducer from './redux/reducers/product.reducer';
import { FiltersComponent } from './components/filters/filters.component';
import { FilterComponent } from './components/filters/filter/filter.component';
import { FilterHeaderComponent } from './components/filters/filter-header/filter-header.component';

@NgModule({
    declarations: [
        AppComponent,
        ProductComponent,
        ProductListComponent,
        HeaderComponent,
        SearchbarComponent,
        FavoriteModalComponent,
        FavoriteProductComponent,
        FiltersComponent,
        FilterComponent,
        FilterHeaderComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule,
        StoreModule.forRoot({'productsMethod': ProductsReducer.productReducer})
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
