import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommiteeRegistrationComponent } from './commitee-registration.component';

describe('CommiteeRegistrationComponent', () => {
  let component: CommiteeRegistrationComponent;
  let fixture: ComponentFixture<CommiteeRegistrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommiteeRegistrationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommiteeRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
