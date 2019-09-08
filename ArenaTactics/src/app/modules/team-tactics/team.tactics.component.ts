import { Component, OnInit, OnDestroy } from '@angular/core';
import { TeamSelectorService } from 'src/app/core/team.selector.service';
import { Team } from 'src/app/model/team';
import { Member } from 'src/app/model/member';
import { Subscription } from 'rxjs';
import { Matchup } from 'src/app/model/matchup';
import { PersistenceService } from 'src/app/core/persistence.server.service';

@Component({
    selector: 'app-team-tactics',
    templateUrl: './team.tactics.component.html',
    styleUrls: ['./team.tactics.component.scss']
})
export class TeamTacticsComponent implements OnInit, OnDestroy {
    persistenceSubscription: Subscription;
    team: Team;

    addingMatchup: boolean;
    matchup: Matchup;

    showForm: boolean;
    selectedMatchup: Matchup;

    constructor(
        private teamSelectorServer: TeamSelectorService,
        private persistenceServer: PersistenceService
    ) {}

    ngOnInit() {
        this.addingMatchup = false;
        this.matchup = { members: [], tactic: '' };
        this.showForm = false;

        this.team = this.teamSelectorServer.getCurrentTeam();
        this.persistenceSubscription = this.teamSelectorServer.getPersistenceObject().subscribe((team) => {
            this.team = team;
            this.addingMatchup = false;
            this.matchup = { members: [], tactic: '' };
        });
    }

    ngOnDestroy() {
        this.persistenceSubscription.unsubscribe();
    }

    getClassNameForMember(member: Member): string {
        return Member.getClassNameForMember(member.characterClass);
    }

    getSpecNameForMember(member: Member): string {
        return Member.getSpecNameForMember(member.characterSpec);
    }

    getMembersInMatchup(): number {
        return this.matchup.members.length;
    }

    createMatchup() {
        this.addingMatchup = true;
        this.matchup = { members: [], tactic: '' };
    }

    getMemberIcon(member: Member): string {
        return Member.getMemberIcon(member.characterClass);
    }

    changedAddingMatchup(addingMatchup: boolean) {
        this.addingMatchup = addingMatchup;
        this.persistenceServer.persistObject();
    }

    pickedMatchup(matchup: Matchup) {
        this.selectedMatchup = matchup;
        this.showForm = true;
    }

    closeForm(showForm: boolean) {
        this.selectedMatchup = undefined;
        this.showForm = showForm;
        this.persistenceServer.persistObject();
    }
}
