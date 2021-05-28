import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MeasurementRoutingModule } from './measurement-routing.module';
import { MeasurementComponent } from './measurement.component';


@NgModule({
  declarations: [
    MeasurementComponent
  ],
  imports: [
    CommonModule,
    MeasurementRoutingModule
  ]
})
export class MeasurementModule { }
