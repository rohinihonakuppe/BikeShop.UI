import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewDetailsRoutingModule } from './view-details-routing.module';
import { BikeDetailsComponent } from '../bike-details.component';


@NgModule({
  declarations: [BikeDetailsComponent],
  imports: [
    CommonModule,
    ViewDetailsRoutingModule
  ]
})
export class ViewDetailsModule { }
