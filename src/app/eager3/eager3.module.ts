import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedMfeModule } from '../shared-mfe/shared-mfe.module';
import { Eager3Component } from './eager3.component';

@NgModule({
  // within the component, we re-provide the services
  // we get new services each time we browse this component
  imports: [CommonModule, SharedMfeModule],
  declarations: [Eager3Component],
  exports: [Eager3Component],
})
export class Eager3Module {}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
