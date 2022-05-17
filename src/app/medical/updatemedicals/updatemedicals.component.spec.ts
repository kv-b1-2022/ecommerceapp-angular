import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatemedicalsComponent } from './updatemedicals.component';

describe('UpdatemedicalsComponent', () => {
  let component: UpdatemedicalsComponent;
  let fixture: ComponentFixture<UpdatemedicalsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatemedicalsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatemedicalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
