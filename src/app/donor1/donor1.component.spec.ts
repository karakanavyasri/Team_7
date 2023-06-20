import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Donor1Component } from './donor1.component';

describe('Donor1Component', () => {
  let component: Donor1Component;
  let fixture: ComponentFixture<Donor1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Donor1Component]
    });
    fixture = TestBed.createComponent(Donor1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
