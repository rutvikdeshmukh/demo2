import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Dc3Component } from './dc3.component';

describe('Dc3Component', () => {
  let component: Dc3Component;
  let fixture: ComponentFixture<Dc3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Dc3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Dc3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
