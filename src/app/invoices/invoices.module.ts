import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedMfeModule } from '../shared-mfe/shared-mfe.module';
import { InvoicesRoutingModule } from './invoices-routing.module';
import { InvoicesComponent } from './invoices.component';

@NgModule({
  // transient instances
  imports: [CommonModule, InvoicesRoutingModule, SharedMfeModule],
  declarations: [InvoicesComponent],
})
export class InvoicesModule {}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
