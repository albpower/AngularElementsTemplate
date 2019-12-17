import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';

import { AppComponent } from './app.component';
import { AFilePreviewerComponent } from './a-file-previewer/a-file-previewer.component';
import { SafePipe } from './safe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    AFilePreviewerComponent,
    SafePipe
  ],
  imports: [
    BrowserModule
  ],
  entryComponents: [
    AppComponent,
    AFilePreviewerComponent
  ],
  providers: [
    SafePipe
  ],
  bootstrap: []
})
export class AppModule {

  constructor(private injector: Injector) {
    const element = createCustomElement(AFilePreviewerComponent, { injector: this.injector });
    customElements.define('a-file-previewer', element);
  }

  ngDoBootstrap() { }
}
