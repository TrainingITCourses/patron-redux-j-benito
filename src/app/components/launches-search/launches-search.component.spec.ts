import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LaunchesSearchComponent } from './launches-search.component';
import * as include from 'app/components';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormsModule } from '@angular/forms';

describe('LaunchesSearchComponent', () => {
  let component: LaunchesSearchComponent;
  let fixture: ComponentFixture<LaunchesSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        LaunchesSearchComponent,
        include.LaunchesCriteriaComponent,
        include.LaunchesCounterComponent,
        include.LaunchesListComponent,
        include.CriterionTypesComponent,
        include.CriterionResultsComponent,
      ],
      imports: [
        HttpClientModule,
        HttpClientTestingModule,
        FormsModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LaunchesSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render title in a h1 tag', async(() => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Búsqueda de lanzamientos');
  }));

  it('should render title in a h2 tag', async(() => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h2').textContent).toContain('Resultado de la búsqueda');
  }));
});
