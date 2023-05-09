import { Component } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {
  Highcharts=Highcharts
  chartOptions={}
  constructor(){
    this.chartOptions={
      chart: {
          type: 'pie',
          options3d: {
              enabled: true,
              alpha: 45
          }
      },
      title: {
          text: 'Petroleum Usage by Countries',
          align: 'left'
      },
      subtitle: {
         
          align: 'left'
      },
      plotOptions: {
          pie: {
              innerSize: 100,
              depth: 45
          }
      },
      series: [{
          name: 'Usage',
          data: [
              ['Norway', 16],
              ['Germany', 12],
              ['USA', 8],
              ['Sweden', 8],
              ['Netherlands', 8],
              ['ROC', 6],
              ['Austria', 7],
              ['Canada', 4],
              ['Japan', 3]
  
          ]
      }],
      
        credits:{
          enabled:false
        }
    }
  }

  
  }

