import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlacementStatesComponent } from './placement-states.component';

describe('PlacementStatesComponent', () => {
  let component: PlacementStatesComponent;
  let fixture: ComponentFixture<PlacementStatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlacementStatesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlacementStatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
