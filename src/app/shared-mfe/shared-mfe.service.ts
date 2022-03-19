import { Injectable } from '@angular/core';
import { SharedMfeApi } from "./shared-mfe.api";

@Injectable()
export class SharedMfeService {
  private hasBeenCalled = false;

  constructor(private sv: SharedMfeApi) {}

  load() {
    this.sv.call();

    if (this.hasBeenCalled == false) {
      console.log('setting true');
      this.hasBeenCalled = true;
    } else {
      console.log('already set true');
    }
  }

  getState()
  {
    return this.hasBeenCalled;
  }
}
