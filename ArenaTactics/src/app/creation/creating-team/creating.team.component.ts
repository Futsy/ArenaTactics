import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Team } from 'src/app/model/team';
import { PersistenceService } from 'src/app/core/persistence.server.service';

@Component({
    selector: 'app-creating-team',
    templateUrl: './creating.team.component.html',
    styleUrls: ['./creating.team.component.scss']
})
export class CreatingTeamComponent implements OnInit {
    @Input() team: Team;
    @Output() quitCreationEvent = new EventEmitter<void>();

    loading: boolean;

    constructor(
        private persistenceServer: PersistenceService
    ) {}

    ngOnInit() {
        this.loading = true;
        setTimeout(this.insertTeam.bind(this), 1000);
    }

    insertTeam() {
        this.persistenceServer.insertNewTeam(this.team);
        this.loading = false;
        this.quitCreationEvent.emit();
    }
}
