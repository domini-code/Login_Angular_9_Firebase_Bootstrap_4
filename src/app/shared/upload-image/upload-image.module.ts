import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UploadImageRoutingModule } from './upload-image-routing.module';
import { UploadImageComponent } from './upload-image.component';
import { NgDominicodeFilesDirective } from './directives/ng-dominicode-files.directive';


@NgModule({
  declarations: [UploadImageComponent, NgDominicodeFilesDirective],
  imports: [
    CommonModule,
    UploadImageRoutingModule
  ]
})
export class UploadImageModule { }
