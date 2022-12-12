import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShortlistedApplicationComponent } from './shortlisted-application.component';

describe('ShortlistedApplicationComponent', () => {
  let component: ShortlistedApplicationComponent;
  let fixture: ComponentFixture<ShortlistedApplicationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShortlistedApplicationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShortlistedApplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
