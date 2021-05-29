import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IntranetRoutingModule } from './intranet-routing.module';
import { IntranetComponent } from './intranet.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { NavListComponent } from './components/nav-list/nav-list.component';
import { NavConfigComponent } from './components/nav-config/nav-config.component';


@NgModule({
  declarations: [
    IntranetComponent,
    NavListComponent,
    NavConfigComponent
  ],
  imports: [
    SharedModule,
    IntranetRoutingModule
  ]
})
export class IntranetModule { }
