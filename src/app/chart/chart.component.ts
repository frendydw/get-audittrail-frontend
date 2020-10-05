import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent {
  title = 'Audittrail Change Type Bar Graph';

  // ADD CHART OPTIONS.
  chartOptions = {
    responsive: true    // THIS WILL MAKE THE CHART RESPONSIVE (VISIBLE IN ANY DEVICE).
  };
  labels =  ['Insert', 'Update', 'Delete'];

  // STATIC DATA FOR THE CHART IN JSON FORMAT.
  chartData = [
    {
      label: 'Change Type Count',
      data: [558603, 20700, 153738]
    }
  ];

  // CHART COLOR.
  colors = [
    { // 1st Year.
      backgroundColor: 'rgba(44,130,201,1)'
    },
  ];

  // CHART CLICK EVENT.
  onChartClick(event) {
    console.log(event);
  }
}