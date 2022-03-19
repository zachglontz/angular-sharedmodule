import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EagerComponent } from './eager/eager.component';
import { Eager2Component } from './eager2/eager2.component';
import { Eager3Component } from './eager3/eager3.component';

const routes: Routes = [
  {
    path: 'customers',
    loadChildren: () =>
      import('./lazy1/customers.module').then((mod) => mod.CustomersModule),
  },
  {
    path: 'orders',
    loadChildren: () =>
      import('./lazy2/orders.module').then((mod) => mod.OrdersModule),
  },
  {
    path: 'invoices',
    loadChildren: () =>
      import('./lazy3/invoices.module').then((mod) => mod.InvoicesModule),
  },
  {
    path: 'eager',
    component: EagerComponent,
  },
  {
    path: 'eager2',
    component: Eager2Component,
  },
  {
    path: 'eager3',
    component: Eager3Component,
  },
  {
    path: '',
    redirectTo: 'eager',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [],
})
export class AppRoutingModule {}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
