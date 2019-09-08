import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Team } from 'src/app/model/team';
import { Member } from 'src/app/model/member';
import { Matchup } from 'src/app/model/matchup';

@Component({
    selector: 'app-matchup-wrapper',
    templateUrl: './matchup.wrapper.component.html',
    styleUrls: ['./matchup.wrapper.component.scss']
})
export class MatchupWrapperComponent {
    @Output() selectedMatchupEvent = new EventEmitter<Matchup>();
    @Input() team: Team;

    getMemberIcon(member: Member): string {
        return Member.getMemberIcon(member.characterClass);
    }

    getClassNameForMember(member: Member) {
        return Member.getClassNameForMember(member.characterClass);
    }

    getSpecNameForMember(member: Member) {
        return Member.getSpecNameForMember(member.characterSpec);
    }

    selectedMatchup(matchup: Matchup) {
        this.selectedMatchupEvent.emit(matchup);
    }
}
