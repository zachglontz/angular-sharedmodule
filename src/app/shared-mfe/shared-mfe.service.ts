import { Injectable } from '@angular/core';
import { BehaviorSubject } from "rxjs";
import { SharedMfeApi } from "./shared-mfe.api";

@Injectable()
export class SharedMfeService {

  private stateTest : BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor(private sv: SharedMfeApi) {}

  load() {
    this.stateTest.next(true);
  }

  getState()
  {
    return this.stateTest;
  }
}
