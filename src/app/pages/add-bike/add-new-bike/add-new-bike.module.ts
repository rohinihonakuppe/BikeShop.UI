import { NgModule } from '@angular/core';
import { CommonModule, NgFor, NgForOf } from '@angular/common';

import { AddNewBikeRoutingModule } from './add-new-bike-routing.module';
import { FormsModule } from '@angular/forms';
import { AddBikeComponent } from '../add-bike.component';


@NgModule({
  declarations: [AddBikeComponent],
  imports: [
    CommonModule,
    AddNewBikeRoutingModule,
    NgFor,
    NgForOf,
    FormsModule
  ]
})
export class AddNewBikeModule { }
