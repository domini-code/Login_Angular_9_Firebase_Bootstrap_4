import { Observable } from 'rxjs';
export class FileItem {
  public name: string;
  public uploading = false;
  public uploadPercent: Observable<number>;
  public downloadURL: Observable<string>;

  constructor(public file: File = file) {
    this.name = file.name;
  }
}
