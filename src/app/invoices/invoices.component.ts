import { Component, OnInit } from '@angular/core';
import {
  SharedMfeApi,
  SharedMfeService,
} from '../shared-mfe/shared-mfe.module';

@Component({
  selector: 'app-invoices',
  templateUrl: './invoices.component.html',
  providers: [SharedMfeService, SharedMfeApi],
})
export class InvoicesComponent implements OnInit {
  constructor(private sharedMfe: SharedMfeService) {}

  ngOnInit() {
    console.log('ngOnInit in InvoicesComponent');
  }

  loadItem() {
    this.sharedMfe.load();
  }
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
