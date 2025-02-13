import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from '../components/components.module';
import { CardComponent } from '../components/card/card.component';



@NgModule({
  declarations: [CardComponent],
  imports: [
    CommonModule,
  ],
  exports: [CardComponent]
})
export class SharedModule { }
