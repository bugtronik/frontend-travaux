import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TravauxDetailsComponent } from './travaux-details.component';

describe('TravauxDetailsComponent', () => {
  let component: TravauxDetailsComponent;
  let fixture: ComponentFixture<TravauxDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TravauxDetailsComponent]
    });
    fixture = TestBed.createComponent(TravauxDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
