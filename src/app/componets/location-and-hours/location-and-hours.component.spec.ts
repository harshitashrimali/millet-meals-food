import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationAndHoursComponent } from './location-and-hours.component';

describe('LocationAndHoursComponent', () => {
  let component: LocationAndHoursComponent;
  let fixture: ComponentFixture<LocationAndHoursComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocationAndHoursComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocationAndHoursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
