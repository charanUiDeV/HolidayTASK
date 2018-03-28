import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HolidaysdetailsComponent } from './holidaysdetails.component';

describe('HolidaysdetailsComponent', () => {
  let component: HolidaysdetailsComponent;
  let fixture: ComponentFixture<HolidaysdetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HolidaysdetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HolidaysdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
