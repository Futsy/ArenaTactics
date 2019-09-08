import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersistenceService } from './persistence.server.service';
import { TeamSelectorService } from './team.selector.service';

@NgModule({
    declarations: [],
    imports: [
        CommonModule
    ],
    providers: [
        PersistenceService,
        TeamSelectorService
    ]
})
export class CoreModule { }
