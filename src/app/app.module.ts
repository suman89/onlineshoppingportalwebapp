import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { ServiceWorkerModule } from '@angular/service-worker';
import { AppComponent } from './app.component';

import { environment } from '../environments/environment';

import { HttpClientModule } from '@angular/common/http';

import { FormsModule }    from '@angular/forms';
import { MessagesComponent } from './messages/messages.component';

import { StoreService } from './service/store.service';
import { MessageService } from './service/message.service';
import { ProductService }  from './service/product.service';

import { StoresComponent } from './stores/stores.component';
import { ProductsComponent } from './products/products.component';
import { StoreSearchComponent } from './store-search/store-search.component';

@NgModule({
  declarations: [
    AppComponent,
    MessagesComponent,
    StoresComponent,
    ProductsComponent,
    StoreSearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [StoreService,MessageService,ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
