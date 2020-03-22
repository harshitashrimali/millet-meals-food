import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmainLoginComponent } from './admain-login.component';

describe('AdmainLoginComponent', () => {
  let component: AdmainLoginComponent;
  let fixture: ComponentFixture<AdmainLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdmainLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmainLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
