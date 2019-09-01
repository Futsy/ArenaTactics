import { Component, OnInit, OnDestroy } from '@angular/core';
import { PersistenceService } from '../core/persistence.server.service';
import { Subscription } from 'rxjs';
import { Team } from '../model/team';
import { StateService } from '../core/state.server.service';
import { State } from '../model/state';

@Component({
    selector: 'app-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit, OnDestroy {
    persistenceSubscription: Subscription;
    teams: Team[] = [];

    constructor(
        private persistenceServer: PersistenceService,
        private stateServer: StateService
    ) {}

    ngOnInit() {
        this.persistenceSubscription = this.persistenceServer.getPersistenceObject()
            .subscribe(teams => this.teams = teams);
    }

    ngOnDestroy() {
        this.persistenceSubscription.unsubscribe();
    }

    createNewTeam() {
        this.stateServer.updateState(State.Create);
    }
}
