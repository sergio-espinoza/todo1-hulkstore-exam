import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IntranetRoutingModule } from './intranet-routing.module';
import { IntranetComponent } from './intranet.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    IntranetComponent
  ],
  imports: [
    SharedModule,
    IntranetRoutingModule
  ]
})
export class IntranetModule { }
