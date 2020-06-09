import { Injectable } from '@angular/core';

import { AngularFireStorage } from '@angular/fire/storage';
import { finalize } from 'rxjs/operators';

import { FileItem } from '@shared/upload-image/models/file-item';

@Injectable()
export class StorageService {
  private MEDIA_STORAGE_PATH = 'dominicode';

  constructor(private readonly storage: AngularFireStorage) {}

  uploadImage(images: FileItem[]) {
    for (const item of images) {
      item.uploading = true;

      const filePath = this.generateFileName(item.name);
      const fileRef = this.storage.ref(filePath);
      const task = this.storage.upload(filePath, item.file);

      item.uploadPercent = task.percentageChanges();
      task
        .snapshotChanges()
        .pipe(
          finalize(() => {
            item.downloadURL = fileRef.getDownloadURL();
            item.uploading = false;
          })
        )
        .subscribe();
    }
  }

  private generateFileName(name: string): string {
    return `${this.MEDIA_STORAGE_PATH}/${new Date().getTime()}_${name}`;
  }
}
