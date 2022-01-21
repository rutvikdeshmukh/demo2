import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ic1Component } from './ic1.component';

describe('Ic1Component', () => {
  let component: Ic1Component;
  let fixture: ComponentFixture<Ic1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ic1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Ic1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
