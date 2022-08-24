import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ResponseData } from 'src/app/interface/lol-heroes.interface';

@Injectable({
  providedIn: 'root',
})
export class LolHeroesService {

  constructor(private http: HttpClient) {}

  getLolHeroesData(): Observable<ResponseData> {
    return this.http.get<ResponseData>('./assets/heroes/lol-heroes.json');
  }
}
