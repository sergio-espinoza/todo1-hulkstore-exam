import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExtranetRoutingModule } from './extranet-routing.module';
import { ExtranetComponent } from './extranet.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    ExtranetComponent
  ],
  imports: [
    SharedModule,
    ExtranetRoutingModule
  ]
})
export class ExtranetModule { }
