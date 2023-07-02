import { enableProdMode, importProvidersFrom } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app/app.component';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

export const appInitConfig = {
  providers: [importProvidersFrom(BrowserAnimationsModule, HttpClientModule)],
};

bootstrapApplication(AppComponent, appInitConfig);
