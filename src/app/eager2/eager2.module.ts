import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedMfeModule } from '../shared-mfe/shared-mfe.module';
import { Eager2Component } from './eager2.component';

@NgModule({
  // uses forRoot singleton instances of SharedMfeModule in app module
  // even though calling forChild here, it doesn't do anything
  imports: [CommonModule, SharedMfeModule.forChild()],
  declarations: [Eager2Component],
  exports: [Eager2Component],
})
export class Eager2Module {}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
