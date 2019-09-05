import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './overview/menu/menu.component';
import { HeaderComponent } from './header/header.component';
import { PersistenceService } from './core/persistence.server.service';
import { CreationComponent } from './creation/creation.component';
import { OverviewComponent } from './overview/overview.component';
import { ContentComponent } from './overview/content/content.component';
import { MenuHintComponent } from './overview/content/menu-hint/menu.hint.component';
import { ModeSelectorComponent } from './creation/mode-selector/mode.selector.component';
import { MemberSelectorComponent } from './creation/member-selector/member.selector.component';
import { ClassSelectorComponent } from './creation/member-selector/class-selector/class.selector.component';
import { CreatingTeamComponent } from './creation/creating-team/creating.team.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuComponent,
    ContentComponent,
    MenuHintComponent,
    CreationComponent,
    OverviewComponent,
    ModeSelectorComponent,
    MemberSelectorComponent,
    ClassSelectorComponent,
    CreatingTeamComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
      PersistenceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
