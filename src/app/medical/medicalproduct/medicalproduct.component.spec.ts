import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicalproductComponent } from './medicalproduct.component';

describe('MedicalproductComponent', () => {
  let component: MedicalproductComponent;
  let fixture: ComponentFixture<MedicalproductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MedicalproductComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicalproductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
