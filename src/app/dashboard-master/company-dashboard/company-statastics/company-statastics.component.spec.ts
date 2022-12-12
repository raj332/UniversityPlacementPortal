import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyStatasticsComponent } from './company-statastics.component';

describe('CompanyStatasticsComponent', () => {
  let component: CompanyStatasticsComponent;
  let fixture: ComponentFixture<CompanyStatasticsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompanyStatasticsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompanyStatasticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
