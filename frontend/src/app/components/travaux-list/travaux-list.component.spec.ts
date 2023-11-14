import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TravauxListComponent } from './travaux-list.component';

describe('TravauxListComponent', () => {
  let component: TravauxListComponent;
  let fixture: ComponentFixture<TravauxListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TravauxListComponent]
    });
    fixture = TestBed.createComponent(TravauxListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
