import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { StoreModule } from '@ngrx/store';

import { LolHeroesComponent } from './lol-heroes.component';

describe('LolHeroesComponent', () => {
  let component: LolHeroesComponent;
  let fixture: ComponentFixture<LolHeroesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, StoreModule.forRoot({})],
      declarations: [LolHeroesComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LolHeroesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
