import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  { path: '', redirectTo: 'extranet', pathMatch: 'full' },
  {
    path: 'intranet',
    loadChildren: () =>
      import('./modules/intranet/intranet.module').then(m => m.IntranetModule)
  },
  {
    path: 'extranet',
    loadChildren: () =>
      import('./modules/extranet/extranet.module').then(m => m.ExtranetModule)
  },
  {
    path: 'auth',
    loadChildren: () =>
      import('./modules/auth/auth.module').then(m => m.AuthModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
