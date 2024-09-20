import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './components/home/home.component';
import { ChartsComponent } from './components/charts/charts.component';
import { ProgramsListComponent } from './components/programs-list/programs-list.component';
import { DetailsPanelComponent } from './components/details-panel/details-panel.component';

@NgModule({
  declarations: [
    HomeComponent,
    ChartsComponent,
    ProgramsListComponent,
    DetailsPanelComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
