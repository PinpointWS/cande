import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BeforeandafterComponent } from './beforeandafter.component';

describe('BeforeandafterComponent', () => {
  let component: BeforeandafterComponent;
  let fixture: ComponentFixture<BeforeandafterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeforeandafterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeforeandafterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
