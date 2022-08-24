import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CasinoService {
  category$ = new BehaviorSubject('');

  constructor(private http: HttpClient) {}

  selectedCategory(category: string) {
    this.category$.next(category);
  }

  getGames(): Observable<any> {
    return this.http.get('./assets/casino/casino.json');
  }
}
