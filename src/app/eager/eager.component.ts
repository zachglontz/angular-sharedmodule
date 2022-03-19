import { Component, OnInit } from '@angular/core';
import { SharedMfeService } from '../shared-mfe/shared-mfe.service';

@Component({
  selector: 'app-eager',
  templateUrl: './eager.component.html',
  styleUrls: ['./eager.component.scss'],
})
export class EagerComponent implements OnInit {
  // private sharedMfeSevice: SharedMfeService
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
