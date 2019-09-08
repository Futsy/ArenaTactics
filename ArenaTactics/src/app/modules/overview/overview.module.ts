import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverviewComponent } from './overview.component';
import { MenuComponent } from './menu/menu.component';
import { ContentComponent } from './content/content.component';
import { MenuHintComponent } from './content/menu-hint/menu.hint.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { RouterModule } from '@angular/router';

import { routes } from './overview-routing.routing';
import { ImportExportModule } from '../import-export/import-export.module';
import { TeamTacticsModule } from '../team-tactics/team-tactics.module';

@NgModule({
    declarations: [
        OverviewComponent,
        MenuComponent,
        ContentComponent,
        MenuHintComponent
    ],
    imports: [
        CommonModule,
        ImportExportModule,
        TeamTacticsModule,
        SharedModule,
        RouterModule.forChild(routes)
    ],
    exports: [
        OverviewComponent
    ]
})
export class OverviewModule { }
