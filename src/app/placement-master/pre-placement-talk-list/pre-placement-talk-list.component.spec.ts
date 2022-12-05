import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrePlacementTalkListComponent } from './pre-placement-talk-list.component';

describe('PrePlacementTalkListComponent', () => {
  let component: PrePlacementTalkListComponent;
  let fixture: ComponentFixture<PrePlacementTalkListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrePlacementTalkListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrePlacementTalkListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
