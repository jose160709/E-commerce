import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { Chart } from 'chart.js/auto';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements AfterViewInit {
  @ViewChild('myChart') myChart!: ElementRef;

  ngAfterViewInit() {
    new Chart(this.myChart.nativeElement, {
      type: 'bar',
      data: {
        labels: ['Enero', 'Febrero', 'Marzo'],
        datasets: [{
          label: 'Ventas',
          data: [10, 20, 30],
          backgroundColor: ['red', 'blue', 'green']
        }]
      }
    });
  }
}
