import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MeetthedoctorsComponent } from './meetthedoctors.component';

describe('MeetthedoctorsComponent', () => {
  let component: MeetthedoctorsComponent;
  let fixture: ComponentFixture<MeetthedoctorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeetthedoctorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeetthedoctorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
