import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StoresComponent } from './stores/stores.component';
import {ProductsComponent} from './products/products.component';
import { StoreSearchComponent } from './store-search/store-search.component'

const routes: Routes = [
  { path: '', redirectTo: '/stores', pathMatch: 'full' },
  { path: 'stores', component: StoresComponent },
  { path: 'stores/:id', component: ProductsComponent},
  { path: 'stores/detail/:storeType', component: StoreSearchComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
