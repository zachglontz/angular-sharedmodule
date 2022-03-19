import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrdersRoutingModule } from './orders-routing.module';
import { OrderListComponent } from './order-list/order-list.component';
import { SharedMfeModule } from '../shared-mfe/shared-mfe.module';

@NgModule({
  // gets it own singleton services (different than eager2)
  // this doesn't work in eager2
  imports: [CommonModule, OrdersRoutingModule, SharedMfeModule.forChild()],
  declarations: [OrderListComponent],
})
export class OrdersModule {}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
