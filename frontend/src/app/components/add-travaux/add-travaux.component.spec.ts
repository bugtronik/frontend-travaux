import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTravauxComponent } from './add-travaux.component';

describe('AddTravauxComponent', () => {
  let component: AddTravauxComponent;
  let fixture: ComponentFixture<AddTravauxComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddTravauxComponent]
    });
    fixture = TestBed.createComponent(AddTravauxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
