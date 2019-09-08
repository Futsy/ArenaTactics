import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Team } from 'src/app/model/team';
import { Member } from 'src/app/model/member';
import { Matchup } from 'src/app/model/matchup';

@Component({
    selector: 'app-matchup-creator',
    templateUrl: './matchup.creator.component.html',
    styleUrls: ['./matchup.creator.component.scss']
})
export class MatchupCreatorComponent {
    @Output() changedAddingMatchupEvent = new EventEmitter<boolean>();

    @Input() team: Team;
    @Input() addingMatchup: boolean;
    @Input() matchup: Matchup;
    @Input() showForm: boolean;

    getMembersInMatchup(): number {
        return this.matchup.members.length;
    }

    addMemberToMatchup(member: Member) {
        this.matchup.members.push(member);

        if (this.matchup.members.length === this.team.members.length) {
            this.team.matchups.push(this.matchup);
            this.matchup = { members: [], tactic: '' };
            this.addingMatchup = false;
            this.changedAddingMatchupEvent.emit(false);
        }
    }

    getMemberIcon(member: Member): string {
        return Member.getMemberIcon(member.characterClass);
    }
}
