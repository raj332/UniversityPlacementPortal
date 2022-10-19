import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationMasterComponent } from './registration-master.component';

describe('RegistrationMasterComponent', () => {
  let component: RegistrationMasterComponent;
  let fixture: ComponentFixture<RegistrationMasterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistrationMasterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistrationMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
