import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewJobProfileComponent } from './view-job-profile.component';

describe('ViewJobProfileComponent', () => {
  let component: ViewJobProfileComponent;
  let fixture: ComponentFixture<ViewJobProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewJobProfileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewJobProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
