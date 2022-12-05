import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrePlacementVotingComponent } from './pre-placement-voting.component';

describe('PrePlacementVotingComponent', () => {
  let component: PrePlacementVotingComponent;
  let fixture: ComponentFixture<PrePlacementVotingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrePlacementVotingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrePlacementVotingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
