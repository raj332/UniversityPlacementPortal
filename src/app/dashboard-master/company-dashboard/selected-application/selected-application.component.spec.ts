import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectedApplicationComponent } from './selected-application.component';

describe('SelectedApplicationComponent', () => {
  let component: SelectedApplicationComponent;
  let fixture: ComponentFixture<SelectedApplicationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectedApplicationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectedApplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
