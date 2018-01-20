import { Component } from '@angular/core';
import {bestRated} from './profile.component';
 
@Component({
  selector: 'doughnut-chart',
  templateUrl: './doughnut-chart.html',
  styleUrls: ['./doughnut-chart.css']
})
export class DoughnutChartComponent {


  // Doughnut
  //public doughnutChartLabels:string[] = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
  public rated = bestRated;
  //public firstRated = [bestRated[0].vote_average, 10 - bestRated[0].vote_average];
  //public doughnutChartData:number[] = [7, 3];
  public doughnutChartType:string = 'doughnut';
  public doughnutChartColor: Array<any> = [
      {
          backgroundColor: [
              'goldenrod',
              'lightgray'
          ],
          borderColor: '#2F3238'
      },
  ];
  public doughnutOptions: any = {
    events:[],
  //Boolean - Whether we should show a stroke on each segment
  // set to false to hide the space/line between segments
    elements: {
        arc: {
            borderWidth: 0
        }
    }
};
 
  // events
  public chartClicked(e:any):void {
  }
 
  public chartHovered(e:any):void {
  }
}