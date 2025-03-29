import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs';
// import {config } from '../assets/config.json';

@Injectable({
  providedIn: 'root',
})
export class InitService {
  config: any;
  constructor(private http: HttpClient) {}
  init() {
    return this.http.get('/config.json').pipe(
      tap((config) => {
        this.config = config;
      })
    );
  }
}
