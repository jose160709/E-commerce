import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { ChartComponent } from './chart/chart.component';



@NgModule({
  declarations: [
    CardComponent,
    ChartComponent
  ],
  imports: [
    CommonModule,
    
  ],
  exports: [
    CardComponent
  ]
})
export class ComponentsModule { }
