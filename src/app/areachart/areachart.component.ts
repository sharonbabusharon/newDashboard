import { Component } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';
@Component({
  selector: 'app-areachart',
  templateUrl: './areachart.component.html',
  styleUrls: ['./areachart.component.css']
})
export class AreachartComponent {
  
  Highcharts=Highcharts
  chartOptions={}
  constructor(){
    this.chartOptions={
      chart: {
          type: 'areaspline'
      },
      title: {
          text: 'Yearly increase and decrease in prices pf fuels',
          align: 'center'
      },
      subtitle: {
          text: 'Source: Malayala Manorama',
          align: 'center'
      },
      legend: {
          layout: 'vertical',
          align: 'left',
          verticalAlign: 'top',
          x: 120,
          y: 70,
          floating: true,
          borderWidth: 1,
   
      },
      xAxis: {
          plotBands: [{ // Highlight the two last years
              from: 2019,
              to: 2020,
              color: 'rgba(68, 170, 213, .2)'
          }]
      },
      yAxis: {
          title: {
              text: 'Quantity'
          }
      },
      tooltip: {
          shared: true,
          headerFormat: '<b>Hunting season starting autumn {point.x}</b><br>'
      },
      credits: {
          enabled: false
      },
      plotOptions: {
          series: {
              pointStart: 2000
          },
          areaspline: {
              fillOpacity: 0.5
          }
      },
      series: [{
          name: 'petrol',
          data:
              [
                  380,
                  373,
                  378,
                  385,
                  367,
                  360,
                  349,
                  356,
                  356,
                  359,
                  364,
                  364,
                  346,
                  349,
                  331,
                  311,
                  308,
                  311,
                  306,
                  319,
                  766
              ]
      }, {
          name: 'Diesel',
          data:
              [
                  234,
                  299,
                  233,
                  295,
                  896,
                  635,
                173,
                  646,
                  686,
                  709,
                  143,
                  829,
                  131,
                  202,
                  140,
                  718,
                  773,
                  556,
                  820,
                  445,
                  248
              ]
      }]
  }
  HC_exporting(Highcharts);
  }
}
