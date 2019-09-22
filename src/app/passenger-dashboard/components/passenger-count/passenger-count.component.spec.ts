import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PassengerCountComponent } from './passenger-count.component';

describe('PassengerCountComponent', () => {
  let component: PassengerCountComponent;
  let fixture: ComponentFixture<PassengerCountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PassengerCountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PassengerCountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
