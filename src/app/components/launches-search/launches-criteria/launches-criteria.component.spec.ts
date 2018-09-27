import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LaunchesCriteriaComponent } from './launches-criteria.component';
import { CriterionResultsComponent } from './criterion-results';
import { CriterionTypesComponent } from './criterion-types';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

describe('LaunchesCriteriaComponent', () => {
  let component: LaunchesCriteriaComponent;
  let fixture: ComponentFixture<LaunchesCriteriaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        LaunchesCriteriaComponent,
        CriterionResultsComponent,
        CriterionTypesComponent
      ],
      imports: [
        HttpClientModule,
        FormsModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LaunchesCriteriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render title in a h3 tag', async(() => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h3').textContent).toContain('Selecciona el tipo de criterio');
  }));
});
