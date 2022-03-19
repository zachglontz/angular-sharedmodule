import { Component, OnInit } from '@angular/core';
import { SharedMfeApi } from '../shared-mfe/shared-mfe.module';
import { SharedMfeService } from '../shared-mfe/shared-mfe.service';

@Component({
  selector: 'app-eager-3',
  templateUrl: './eager3.component.html',
  providers: [SharedMfeService, SharedMfeApi],
})
export class Eager3Component implements OnInit {
  constructor(private sharedMfeSevice: SharedMfeService) {}

  ngOnInit() {
    console.log('ngOnInit in EagerComponent');
  }

  loadItem() {
    this.sharedMfeSevice.load();
  }
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
