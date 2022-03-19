import { Component, OnInit } from '@angular/core';
import { SharedMfeService } from '../../shared-mfe/shared-mfe.module';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css'],
})
export class OrderListComponent implements OnInit {
  constructor(private sharedMfe: SharedMfeService) {}

  ngOnInit() {
    console.log('ngOnInit in CustomerListComponent');
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
