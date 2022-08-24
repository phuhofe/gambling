import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkinDetailComponent } from './skin-detail.component';

describe('SkinDetailComponent', () => {
  let component: SkinDetailComponent;
  let fixture: ComponentFixture<SkinDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkinDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SkinDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
