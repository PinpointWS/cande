import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MakeAPaymentComponent } from './make-a-payment.component';

describe('MakeAPaymentComponent', () => {
  let component: MakeAPaymentComponent;
  let fixture: ComponentFixture<MakeAPaymentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MakeAPaymentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MakeAPaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
