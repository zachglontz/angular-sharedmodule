import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedMfeComponent } from './shared-mfe.component';
import { SharedMfeApi } from './shared-mfe.api';
import { SharedMfeService } from './shared-mfe.service';

@NgModule({
  imports: [CommonModule],
  declarations: [SharedMfeComponent],
  exports: [SharedMfeComponent],
})
export class SharedMfeModule {
  // goes in app.module.ts
  // creates a singleton service for all feature modules
  // IF a feature module wants it own singleton instances...
  // 1. can add forChild() in provider module list
  // 1. only works for lazy (not eager)
  // IF a feature module wants its own transient instances
  // 2. can add services to component provider List
  // 2. and services will be destroyed when leaving component
  // 3. works for lazy and eager
  static forRoot(): ModuleWithProviders<SharedMfeModule> {
    return {
      ngModule: SharedMfeModule,
      providers: [SharedMfeService, SharedMfeApi],
    };
  }

  static forChild(): ModuleWithProviders<SharedMfeModule> {
    return {
      ngModule: SharedMfeModule,
      providers: [SharedMfeService, SharedMfeApi],
    };
  }
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
