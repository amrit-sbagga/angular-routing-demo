import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ProductComponent } from './product/product.component';
import { ProductListComponent } from './product-list/product-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path : '',
    redirectTo : '/header',
    pathMatch : 'full'
  },
  {
    path : 'header',
    component : HeaderComponent
  },
  {
    path : 'footer',
    component : FooterComponent
  },
  {
    path : 'product',
    component : ProductComponent
  },
  {
    path : 'productlist',
    component : ProductListComponent
  },
  { 
    path: 'customers', 
    loadChildren: () => import('./customers/customers.module').then(m => m.CustomersModule) 
  },
  {
    path: 'orders', 
    loadChildren: () => import('./orders/orders.module').then(m => m.OrdersModule) 
  },
  {
    path : '**',
    component : PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
