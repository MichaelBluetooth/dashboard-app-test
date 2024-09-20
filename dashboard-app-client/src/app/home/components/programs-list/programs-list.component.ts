import { Component } from '@angular/core';

@Component({
  selector: 'app-programs-list',
  templateUrl: './programs-list.component.html',
  styleUrl: './programs-list.component.scss'
})
export class ProgramsListComponent {
  projects = [
    {
      name: 'Project 1',
      program: 'Program 1',
      status: 'Active',
      pace: 'Standard',
      stage: 'Learn'
    },
    {
      name: 'Project 2',
      program: 'Program 1',
      status: 'Active',
      pace: 'Standard',
      stage: 'Learn'
    },
    {
      name: 'Project 3',
      program: 'Program 1',
      status: 'Active',
      pace: 'Standard',
      stage: 'Learn'
    },
    {
      name: 'Project 4',
      program: 'Program 2',
      status: 'Active',
      pace: 'Standard',
      stage: 'Learn'
    }
  ]
}
