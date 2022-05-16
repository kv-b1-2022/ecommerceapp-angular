import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplaydressesComponent } from './displaydresses.component';

describe('DisplaymendressComponent', () => {
  let component: DisplaydressesComponent;
  let fixture: ComponentFixture<DisplaydressesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplaydressesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplaydressesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
