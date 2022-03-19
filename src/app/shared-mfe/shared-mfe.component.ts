import { Component, forwardRef, Inject, OnInit } from '@angular/core';
import { SharedMfeApi } from './shared-mfe.module';
import { SharedMfeService } from './shared-mfe.service';

@Component({
  selector: 'app-shared-mfe',
  templateUrl: './shared-mfe.component.html',
  styleUrls: ['./shared-mfe.component.scss'],
  providers: [],
})
export class SharedMfeComponent implements OnInit {
  constructor(
    // provided by parent
    @Inject(forwardRef(() => SharedMfeService)) private sv: SharedMfeService
  ) {}

  ngOnInit() {
    console.log('ngOnInit in SharedMfeComponent');
  }
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
