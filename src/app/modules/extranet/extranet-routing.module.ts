import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExtranetComponent } from './extranet.component';

const routes: Routes = [
  { path: '', component: ExtranetComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExtranetRoutingModule { }
