import { Component, ElementRef, ViewChild } from '@angular/core';

//This imports ALL features and can affect bundle size
//TODO: can we import just what we're using?
import Chart from 'chart.js/auto'

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrl: './charts.component.scss'
})
export class ChartsComponent {
  @ViewChild('initiativesEl', {static: true}) initiativesEl: ElementRef;
  @ViewChild('stagesEl', {static: true}) stagesEl: ElementRef;
  @ViewChild('programsEl', {static: true}) programsEl: ElementRef;

  ngOnInit(){
    this.buildInitiativesChart();
    this.buildStagesChart();
    this.buildProgramsChart();
  }

  buildInitiativesChart(){
    new Chart(
      this.initiativesEl.nativeElement.getContext('2d'),
      {
        type: 'pie',
        options: {
          plugins: {            
            legend: {
              position: 'right'
            }
          }
        },
        data: {
          labels: ['Initiative 1', 'Initiative 2', 'Initiative 3'],
          datasets: [
            {
              data: [60, 40, 20]
            }
          ]
        }
      }
    );
  }

  buildStagesChart(){
    new Chart(
      this.stagesEl.nativeElement.getContext('2d'),
      {
        type: 'pie',
        options: {
          plugins: {            
            legend: {
              position: 'right'
            }
          }
        },
        data: {
          labels: ['Learn', 'Scope', 'Demonstrate', 'Implement'],
          datasets: [
            {
              data: [55, 20, 20, 5]
            }
          ]
        }
      }
    );
  }

  buildProgramsChart(){
    new Chart(
      this.programsEl.nativeElement.getContext('2d'),
      {
        type: 'pie',
        options: {
          plugins: {            
            legend: {
              position: 'right'
            }
          }
        },
        data: {
          labels: ['Program 1', 'Program 2', 'Program 3', 'Program 4', 'Program 5'],
          datasets: [
            {
              data: [20, 20, 25, 10, 25]
            }
          ]
        }
      }
    );
  }
}
