import { Component, OnInit, Input, SimpleChanges, OnChanges, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'aFilePreviewer',
  templateUrl: './a-file-previewer.component.html',
  styleUrls: ['./a-file-previewer.component.scss']
})
export class AFilePreviewerComponent implements OnChanges {

  // VARIABLES
  @Input('filepath') FilePath: string;
  CurrentPath: string;
  FileType: string;
  HtmlPreview: string;
  RetryCount: number = 0;

  constructor() { }

  ngOnChanges(changes: SimpleChanges) {
    const currentChange = changes['FilePath'].currentValue;
    if (currentChange !== undefined && currentChange !== null && currentChange !== '' && currentChange !== '{{pdfName}}' && (currentChange.includes('http://') || currentChange.includes('https://'))) {
      this.CurrentPath = currentChange;
      this.showPreview();
    } else {
      this.FileType = 'None';
      this.HtmlPreview = `<span> Unsupported file preview or file cannot be loaded. </span>`;
    }
  }

  showPreview() {
    if (this.CurrentPath !== null && this.CurrentPath !== '' && (this.CurrentPath.includes('http://') || this.CurrentPath.includes('https://'))) {
      const fileExtension = this.FilePath.split('.');
      if (fileExtension.length > 0) {
        this.FileType = fileExtension[fileExtension.length - 1];

        switch (this.FileType) {
          case 'pdf':
            this.HtmlPreview = `<embed src="${this.CurrentPath}" width="100%" height="500" alt="pdf"
      pluginspage="http://www.adobe.com/products/acrobat/readstep2.html">`;
            break;

          case 'png':
            this.HtmlPreview = `<img src="${this.CurrentPath}" width="100%" alt="FileType" />`;
            break;

          case 'jpg':
            this.HtmlPreview = `<img src="${this.CurrentPath}" width="100%" alt="FileType" />`;
            break;

          case 'gif':
            this.HtmlPreview = `<img src="${this.CurrentPath}" width="100%" alt="FileType" />`;
            break;

          default:
            this.HtmlPreview = `<span> Unsupported file preview, Click <a href="${this.CurrentPath}"> here </a> to download! </span>`;
            break;
        }
      }
    } else if ((this.CurrentPath === null || this.CurrentPath === '') && this.RetryCount === 3) {
      this.FileType = 'None';
      this.HtmlPreview = `<span> Unsupported file preview or file cannot be loaded. </span>`;
    } else {
      this.showPreview();
      this.RetryCount += 1;
    }
  }
}
