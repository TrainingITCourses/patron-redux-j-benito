import { Component,
         OnInit,
         Input,
         Output,
         EventEmitter,
         OnChanges} from '@angular/core';
import { IdValueType } from 'app/models';

@Component({
  selector: 'app-criterion-results',
  templateUrl: './criterion-results.component.html',
  styleUrls: ['./criterion-results.component.scss']
})
export class CriterionResultsComponent implements OnChanges {
  @Input() public criterionResults: IdValueType[];
  @Output() public criterionResultChange = new EventEmitter<string>();
  public selectValue: string;

  constructor() { }

  ngOnChanges() {
    this.selectValue = '';
  }

}
