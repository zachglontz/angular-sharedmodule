import { Component, OnInit } from '@angular/core';
import { SharedMfeService } from '../../shared-mfe/shared-mfe.module';
import { HeroStore } from '../customers-store';
import { HeroApiService } from '../hero.api.service';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css'],
  providers: [HeroApiService, HeroStore],
})
export class CustomerListComponent implements OnInit {
  constructor(
    private herStore: HeroStore,
    private sharedMfeService: SharedMfeService
  ) {}

  ngOnInit() {
    console.log('ngOnInit in CustomerListComponent');
  }

  loadItem() {
    this.sharedMfeService.load();
  }
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
