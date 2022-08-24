import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CommonService {
  age = 22;
  constructor() {}

  ageIncrease() {
    return this.age++;
  }
}
