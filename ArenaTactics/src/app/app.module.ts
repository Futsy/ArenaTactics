import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { ContentComponent } from './content/content.component';
import { HeaderComponent } from './header/header.component';
import { MenuHintComponent } from './content/menu-hint/menu.hint.component';
import { PersistenceService } from './core/persistence.server.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuComponent,
    ContentComponent,
    MenuHintComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [PersistenceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
