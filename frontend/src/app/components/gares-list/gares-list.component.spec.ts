import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GaresListComponent } from './gares-list.component';

describe('GaresListComponent', () => {
  let component: GaresListComponent;
  let fixture: ComponentFixture<GaresListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GaresListComponent]
    });
    fixture = TestBed.createComponent(GaresListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
