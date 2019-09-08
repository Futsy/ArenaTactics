import { Component, OnInit, OnDestroy, Output, EventEmitter } from '@angular/core';
import { PersistenceService } from '../../../core/persistence.server.service';
import { Subscription } from 'rxjs';
import { Team } from '../../../model/team';
import { TeamSelectorService } from 'src/app/core/team.selector.service';

@Component({
    selector: 'app-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit, OnDestroy {
    @Output() selectedImportExportEvent = new EventEmitter<boolean>();

    persistenceSubscription: Subscription;
    teams: Team[] = [];

    constructor(
        private persistenceServer: PersistenceService,
        private teamSelectorServer: TeamSelectorService
    ) {}

    ngOnInit() {
        this.persistenceSubscription = this.persistenceServer.getPersistenceObject()
            .subscribe(teams => this.teams = teams);
        this.teams = this.persistenceServer.getCurrentTeams();
    }

    ngOnDestroy() {
        this.persistenceSubscription.unsubscribe();
    }

    pickImportExport() {
        this.selectedImportExportEvent.emit(true);
    }

    pickTeam(team: Team) {
        this.teamSelectorServer.updatePersistenceObject(team);
        this.selectedImportExportEvent.emit(false);
    }
}
