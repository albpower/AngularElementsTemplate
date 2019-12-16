import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';

import { AppComponent } from './app.component';
import { AFilePreviewerComponent } from './a-file-previewer/a-file-previewer.component';

@NgModule({
  declarations: [
    AppComponent,
    AFilePreviewerComponent
  ],
  imports: [
    BrowserModule
  ],
  entryComponents: [
    AppComponent,
    AFilePreviewerComponent
  ],
  providers: [],
  bootstrap: []
})
export class AppModule {

  constructor(private injector: Injector) { }

  ngDoBootstrap() {

    const element = createCustomElement(AFilePreviewerComponent, { injector: this.injector });
    customElements.define("a-file-previewer", element);

  }
}
