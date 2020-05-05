import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SuscriptorRoutingModule } from './suscriptor-routing.module';
import { SuscriptorComponent } from './suscriptor.component';


@NgModule({
  declarations: [SuscriptorComponent],
  imports: [
    CommonModule,
    SuscriptorRoutingModule
  ]
})
export class SuscriptorModule { }
