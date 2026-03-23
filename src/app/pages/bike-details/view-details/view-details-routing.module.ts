import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { object } from 'yup';
import { BikeDetailsComponent } from '../bike-details.component';

const routes: Routes = [
  {
    path: ":id",
    component: BikeDetailsComponent,
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewDetailsRoutingModule { }
