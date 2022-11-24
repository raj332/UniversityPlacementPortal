import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommiteeLoginComponent } from './commitee-login.component';

describe('CommiteeLoginComponent', () => {
  let component: CommiteeLoginComponent;
  let fixture: ComponentFixture<CommiteeLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommiteeLoginComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommiteeLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
