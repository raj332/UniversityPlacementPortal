import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommiteeProfileComponent } from './commitee-profile.component';

describe('CommiteeProfileComponent', () => {
  let component: CommiteeProfileComponent;
  let fixture: ComponentFixture<CommiteeProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommiteeProfileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommiteeProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
