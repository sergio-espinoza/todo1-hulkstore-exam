import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExtranetRoutingModule } from './extranet-routing.module';
import { ExtranetComponent } from './extranet.component';


@NgModule({
  declarations: [
    ExtranetComponent
  ],
  imports: [
    CommonModule,
    ExtranetRoutingModule
  ]
})
export class ExtranetModule { }
