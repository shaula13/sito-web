import { saveAs } from 'file-saver/FileSaver';
import { Injectable } from '@angular/core';
@Injectable()
export class FileService {
  saveToFileSystem(response) {
    const contentDispositionHeader = response.request.getResponseHeader('Content-Disposition');
    const parts: string[] = contentDispositionHeader.split(';');
    const filename = parts[1].split('=')[1];
    const blob = new Blob([response.data], { type: response.request.response.type });
    saveAs(blob, filename);
  }
}
