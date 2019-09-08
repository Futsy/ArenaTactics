import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Matchup } from 'src/app/model/matchup';
import { Team } from 'src/app/model/team';
import { PersistenceService } from 'src/app/core/persistence.server.service';

@Component({
    selector: 'app-tactic-form',
    templateUrl: './tactic.form.component.html',
    styleUrls: ['./tactic.form.component.scss']
})
export class TacticFormComponent {
    @Output() backEvent = new EventEmitter<boolean>();
    @Input() matchup: Matchup;
    @Input() team: Team;
    @Input() showForm: boolean;

    constructor(
        private persistenceServer: PersistenceService
    ) {}

    goBack() {
        this.backEvent.emit(false);
    }

    setNewTactics(tactics: string) {
        this.matchup.tactic = tactics;
        this.persistenceServer.persistObject();
    }
}
