import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainContentComponent } from './main-content/main-content.component';

import { GalleryComponent } from './gallery/gallery.component';
import { PricesComponent } from './prices/prices.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { LeadEmployeeComponent } from './lead-employee/lead-employee.component';

const routes: Routes = [
  {
    path:'',component:MainContentComponent,
  },

  {
    path:'gallery',component:GalleryComponent
  },
  {
    path:'prices',component:PricesComponent
  },
  {
    path:"main",component:MainContentComponent
  },
  {
    path:"add",component:AddEmployeeComponent
  },
  {
    path:'lead',component:LeadEmployeeComponent
  },
  {
    path:'gallery',component:GalleryComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
