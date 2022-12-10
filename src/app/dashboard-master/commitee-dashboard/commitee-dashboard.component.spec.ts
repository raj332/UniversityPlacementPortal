import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommiteeDashboardComponent } from './commitee-dashboard.component';

describe('CommiteeDashboardComponent', () => {
  let component: CommiteeDashboardComponent;
  let fixture: ComponentFixture<CommiteeDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommiteeDashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommiteeDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
