import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CriterionTypesComponent } from './criterion-types.component';

describe('CriterionTypesComponent', () => {
  let component: CriterionTypesComponent;
  let fixture: ComponentFixture<CriterionTypesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CriterionTypesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CriterionTypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
