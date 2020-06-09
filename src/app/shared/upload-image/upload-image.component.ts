import { Component } from '@angular/core';

import { StorageService } from '@shared/upload-image/services/storage.service';
import { FileItem } from '@shared/upload-image/models/file-item';
@Component({
  selector: 'app-upload-image',
  templateUrl: './upload-image.component.html',
  styleUrls: ['./upload-image.component.scss'],
  providers: [StorageService],
})
export class UploadImageComponent {
  files: FileItem[] = [];
  isOverDrop = false;

  constructor(private readonly storageSvc: StorageService) {}

  onUpload(): void {
    this.storageSvc.uploadImage(this.files);
  }
}
