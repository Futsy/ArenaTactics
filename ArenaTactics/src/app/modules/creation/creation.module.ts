import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreatingTeamComponent } from './creating-team/creating.team.component';
import { ModeSelectorComponent } from './mode-selector/mode.selector.component';
import { CreationComponent } from './creation.component';
import { RouterModule } from '@angular/router';

import { routes } from './creation-routing.routing';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
    declarations: [
        CreatingTeamComponent,
        ModeSelectorComponent,
        CreationComponent
    ],
    imports: [
        CommonModule,
        SharedModule,
        RouterModule.forChild(routes)
    ],
    exports: [
        CreationComponent
    ]
})
export class CreationModule { }
