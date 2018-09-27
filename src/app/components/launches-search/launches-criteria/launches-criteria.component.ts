import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { LaunchesService } from 'app/services';
import { CriterionType, IdValueType, Criterion } from 'app/models';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-launches-criteria',
  templateUrl: './launches-criteria.component.html',
  styleUrls: ['./launches-criteria.component.scss']
})
export class LaunchesCriteriaComponent implements OnInit {
  @Output() public launchCriterionChange = new EventEmitter<Criterion>();

  public criterionType: CriterionType;
  // public criterionResults: IdValueType[] = [];
  public criterionResults$: BehaviorSubject<IdValueType[]> = new BehaviorSubject([]);

  constructor(private launchesService: LaunchesService) { }

  ngOnInit() {
  }

  onCriterionTypeChange(criterionType: CriterionType) {
    this.criterionType = criterionType;
    switch (criterionType) {
      case 'agencies':
        this.launchesService.getAgencies().subscribe((agencies) => {
          this.assignCriterionResults(agencies);
        });
        break;
      case 'types':
        this.launchesService.getMissionTypes().subscribe((missionTypes) => {
          this.assignCriterionResults(missionTypes);
        });
        break;
      case 'status':
        this.launchesService.getStatusTypes().subscribe((statusTypes) => {
          this.assignCriterionResults(statusTypes);
        });
        break;
      default:
        throw new Error('criterionType is not supported :S');
    }
    this.launchCriterionChange.emit();
  }

  private assignCriterionResults(results: any[]): void {
    const criterionResults = [];
    results.forEach((elem) => {
      criterionResults.push({
        id: elem.id,
        value: elem.name
      });
    });
    this.criterionResults$.next(criterionResults);
  }

  onCriterionResultChange(criterionResultId: string) {
    this.launchCriterionChange.emit({
      type: this.criterionType,
      id: Number(criterionResultId)
    });
  }

}
