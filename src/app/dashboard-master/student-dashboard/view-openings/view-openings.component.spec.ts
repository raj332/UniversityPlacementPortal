import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewOpeningsComponent } from './view-openings.component';

describe('ViewOpeningsComponent', () => {
  let component: ViewOpeningsComponent;
  let fixture: ComponentFixture<ViewOpeningsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewOpeningsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewOpeningsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
