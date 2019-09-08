import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { OverviewModule } from './modules/overview/overview.module';
import { CreationModule } from './modules/creation/creation.module';
import { SharedModule } from './shared/shared.module';
import { ImportExportModule } from './modules/import-export/import-export.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    OverviewModule,
    CreationModule,
    ImportExportModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
