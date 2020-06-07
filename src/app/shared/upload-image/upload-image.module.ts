import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UploadImageRoutingModule } from './upload-image-routing.module';
import { UploadImageComponent } from './upload-image.component';


@NgModule({
  declarations: [UploadImageComponent],
  imports: [
    CommonModule,
    UploadImageRoutingModule
  ]
})
export class UploadImageModule { }
