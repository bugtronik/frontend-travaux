import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GareDetailsComponent } from './gare-details.component';

describe('GareDetailsComponent', () => {
  let component: GareDetailsComponent;
  let fixture: ComponentFixture<GareDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GareDetailsComponent]
    });
    fixture = TestBed.createComponent(GareDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
