import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { LolHeroesService } from './lol-heroes.service';

describe('LolHeroesService', () => {
  
  let service: LolHeroesService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [LolHeroesService],
    });
    service = TestBed.inject(LolHeroesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
