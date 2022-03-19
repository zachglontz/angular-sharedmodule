import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { Observable, Subscription } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

@Injectable()
export class SharedMfeApi {
  constructor() {}

  call() {
    // console.log('testing');
  }
}
