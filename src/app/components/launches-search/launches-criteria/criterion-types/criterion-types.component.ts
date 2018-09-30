import { Component,
         OnInit,
         Output,
         EventEmitter } from '@angular/core';
import { CriterionType, CriterionTypes } from 'app/models';

class CriterionName {
  type: CriterionType;
  name: string;
}

@Component({
  selector: 'app-criterion-types',
  templateUrl: './criterion-types.component.html',
  styleUrls: ['./criterion-types.component.scss']
})
export class CriterionTypesComponent implements OnInit {
  @Output() public criterionTypeChange = new EventEmitter<CriterionType>();

  public criteria: CriterionName[];
  public criterionTypeSelected: string;

  constructor() { }

  ngOnInit() {
    this.criteria = this.initCriteria();
  }

  private initCriteria(): CriterionName[] {
    return [
      {
        type: CriterionTypes.StatusTypes,
        name: 'Estado'
      },
      {
        type: CriterionTypes.Agencies,
        name: 'Agencia'
      },
      {
        type: CriterionTypes.MissionTypes,
        name: 'Tipo'
      }
    ];
  }

}
