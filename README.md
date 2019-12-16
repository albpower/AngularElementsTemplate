# AngularElementsTemplate
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.3.


## 1 - ADD ANGULAR ELEMENTS FIRST
 ng add @angular/elements

## 2 - INSTALL fs-extra and concat script to join files
npm install fs-extra concat

## 3 - CREATE BUILD ELEMENTS SCRIPT
const fs = require('fs-extra');
const concat = require('concat');
(async function build() {
    const files = [
        './dist/angularElements/runtime.js',
        './dist/angularElements/polyfills.js',
        './dist/angularElements/scripts.js',
        './dist/angularElements/main.js',
    ]
    await fs.ensureDir('elements')
    await concat(files, 'elements/framework-poll.js');
    await fs.copyFile('./dist/angularElements/styles.css', 'elements/styles.css')
    await fs.copy('./dist/angularElements/assets/', 'elements/assets/' )
    
})()

## ADD BUILD SCRIPT TO package.json
"build:elements": "ng build --prod --output-hashing none && node build-elements.js"

## REMOVE bootstrap from NgModule (app.module)
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

# INSERT COMPONENTS AS ENTRYCOMPONENTS
entryComponents: [
    AFilePreviewerComponent
]

## ADD CUSTOM ELEMENTS TO APP MODULE

## ngDoBootstrap TO CREATE CUSTOM ELEMENTS 
export class AppModule { 
  constructor(private injector: Injector) {}
  ngDoBootstrap() {
    const el = createCustomElement(AFilePreviewerComponent, { injector: this.injector });
    customElements.define('a-file-previewer', el);
  }
}

