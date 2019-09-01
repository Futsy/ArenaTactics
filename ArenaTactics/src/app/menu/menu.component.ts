import { Component, OnInit, OnDestroy } from '@angular/core';
import { PersistenceService } from '../core/persistence.server.service';
import { Subscription } from 'rxjs';
import { Team } from '../model/team';

@Component({
    selector: 'app-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit, OnDestroy {
    subscription: Subscription;
    teams: Team[] = [];

    constructor(
        private persistenceServer: PersistenceService
    ) {}

    ngOnInit() {
        this.subscription = this.persistenceServer.getPersistenceObject()
            .subscribe(teams => this.teams = teams);
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
}
