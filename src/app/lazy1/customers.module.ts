import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomersRoutingModule } from './customers-routing.module';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { SharedMfeModule } from '../shared-mfe/shared-mfe.module';

@NgModule({
  // uses forRoot singleton instances of SharedMfeModule in app module
  imports: [CommonModule, CustomersRoutingModule, SharedMfeModule],
  declarations: [CustomerListComponent],
})
export class CustomersModule {}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
