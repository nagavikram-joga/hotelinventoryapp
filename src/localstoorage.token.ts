import { InjectionToken } from '@angular/core';

export const LocalstorageToken = new InjectionToken<any>('local storage', {
  providedIn: 'root',
  factory() {
    return localStorage;
  },
});
