import { Component, OnInit, Input, SimpleChanges, OnChanges } from '@angular/core';

@Component({
  selector: 'aFilePreviewer',
  templateUrl: './a-file-previewer.component.html',
  styleUrls: ['./a-file-previewer.component.scss']
})
export class AFilePreviewerComponent implements OnChanges {

  // VARIABLES
  @Input('filepath') FilePath: string;
  FileType: string;
  HtmlPreview: string;
  RetryCount: number = 0;

  constructor() { }

  ngOnChanges() {
    this.showPreview();
  }

  showPreview() {
    // console.group('DataAnalytics');
    // console.log('FilePath: ' + this.FilePath);
    // console.log('Count: ' + this.RetryCount);
    // console.log('Type: ' + this.FileType);
    // console.groupEnd();
    if (this.FilePath !== null && this.FilePath !== '' && (this.FilePath.includes('http://') || this.FilePath.includes('https://'))) {
      const fileExtension = this.FilePath.split('.');
      if (fileExtension.length > 0) {
        this.FileType = fileExtension[fileExtension.length - 1];
      }

      switch (this.FileType) {
        case 'pdf':
          this.HtmlPreview = `<embed src="${this.FilePath}" width="100%" height="500" alt="pdf"
      pluginspage="http://www.adobe.com/products/acrobat/readstep2.html">`;
          break;

        case 'png':
          this.HtmlPreview = `<img src="${this.FilePath}" width="100%" alt="FileType" />`;
          break;

        case 'jpg':
          this.HtmlPreview = `<img src="${this.FilePath}" width="100%" alt="FileType" />`;
          break;

        case 'gif':
          this.HtmlPreview = `<img src="${this.FilePath}" width="100%" alt="FileType" />`;
          break;

        default:
          this.HtmlPreview = `<span> Unsupported file preview, Click <a href="${this.FilePath}"> here </a> to download! </span>`;
          break;
      }
    } else if ((this.FilePath === null || this.FilePath === '') && this.RetryCount === 3) {
      this.FileType = 'None';
      this.HtmlPreview = `<span> Unsupported file preview or file cannot be loaded. </span>`;
    } else {
      this.showPreview();
      this.RetryCount += 1;
    }
  }
}
