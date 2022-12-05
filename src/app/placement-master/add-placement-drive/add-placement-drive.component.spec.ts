import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPlacementDriveComponent } from './add-placement-drive.component';

describe('AddPlacementDriveComponent', () => {
  let component: AddPlacementDriveComponent;
  let fixture: ComponentFixture<AddPlacementDriveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddPlacementDriveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddPlacementDriveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
