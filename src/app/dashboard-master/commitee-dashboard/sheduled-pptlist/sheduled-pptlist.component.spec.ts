import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SheduledPPTListComponent } from './sheduled-pptlist.component';

describe('SheduledPPTListComponent', () => {
  let component: SheduledPPTListComponent;
  let fixture: ComponentFixture<SheduledPPTListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SheduledPPTListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SheduledPPTListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
