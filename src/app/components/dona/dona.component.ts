import { Component, Input, Output } from '@angular/core';

import { MultiDataSet, Label, Color } from 'ng2-charts';

@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styles: []
})
export class DonaComponent {

  @Input() title: string = 'Sin título';

  @Input('labels') doughnutChartLabels: Label[] = ['Label1', 'Label2', 'Label3'];
  @Input('data') doughnutChartData: MultiDataSet = [
    [1,2,3]
  ];

  public colors: Color[] = [
    { backgroundColor:['#003366','#80aaff','#cccccc']}
  ];

}
