import { Component } from '@angular/core';
 
@Component({
  selector: 'line-chart',
  templateUrl: './line-chart.html',
  styleUrls: ['./line-chart.css']
})
export class LineChartComponent{
  // lineChart
  public lineChartData:Array<any> = [
    {data: [5, 8, 7, 12, 3, 4, 9, 15, 7, 2, 10, 6]},
  ];
  public lineChartLabels:Array<any> = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 
  'August', 'September', 'October' , 'November', 'December'];
  public lineChartOptions:any = {
    events:[],
    responsive: true,
    scales : {
        xAxes : [{
            display: true,
            ticks: {
                fontColor: 'lightgray'
            },
            gridLines: {
                display: true,
                color: 'lightgray'
            },
        }],
        yAxes : [{
            display: true,
            ticks: {
                fontColor: 'lightgray'
            },
            gridLines: {
                display: true,
                color: 'lightgray'
            }
        }]
    }
  };
  public lineChartColors:Array<any> = [
    { // grey
      defaultFontColor: 'white',
      backgroundColor: 'goldenrod',
      borderColor: 'white',
      pointBackgroundColor: 'white',
      pointBorderColor: 'white',
      pointHoverBackgroundColor: 'goldenrod',
      pointHoverBorderColor: 'goldenrod'
    }
  ];
  public lineChartLegend:boolean = false;
  public lineChartType:string = 'line';
 
  // events
  public chartClicked(e:any):void {
    //console.log(e);
  }
 
  public chartHovered(e:any):void {
    //console.log(e);
  }
}