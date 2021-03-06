import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryComponent } from './category/category.component';
import { IntranetComponent } from './intranet.component';

const intranetRoutes: Routes = [
  {
    path: '', component: IntranetComponent, children: [
      {
        path: 'category',
        loadChildren: () =>
          import('./category/category.module').then(m => m.CategoryModule)
      },
      {
        path: 'measurement',
        loadChildren: () =>
          import('./measurement/measurement.module').then(m => m.MeasurementModule)
      },
      {
        path: 'product',
        loadChildren: () =>
          import('./product/product.module').then(m => m.ProductModule)
      },
      {
        path: 'purchase',
        loadChildren: () =>
          import('./purchase/purchase.module').then(m => m.PurchaseModule)
      },
      {
        path: 'sale',
        loadChildren: () =>
          import('./sale/sale.module').then(m => m.SaleModule)
      },
      { path: '', redirectTo: 'category', pathMatch: 'full' }

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(intranetRoutes)],
  exports: [RouterModule]
})
export class IntranetRoutingModule { }
