import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddGareComponent } from './add-gare.component';

describe('AddGareComponent', () => {
  let component: AddGareComponent;
  let fixture: ComponentFixture<AddGareComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddGareComponent]
    });
    fixture = TestBed.createComponent(AddGareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
