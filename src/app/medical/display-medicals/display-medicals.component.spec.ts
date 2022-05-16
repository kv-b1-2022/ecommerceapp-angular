import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayMedicalsComponent } from './display-medicals.component';

describe('DisplayMedicalsComponent', () => {
  let component: DisplayMedicalsComponent;
  let fixture: ComponentFixture<DisplayMedicalsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayMedicalsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayMedicalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
