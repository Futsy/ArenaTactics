import { Component, Input } from '@angular/core';
import { Team } from 'src/app/model/team';
import { Member } from 'src/app/model/member';

@Component({
    selector: 'app-selected-team-information',
    templateUrl: './selected.team.information.component.html',
    styleUrls: ['./selected.team.information.component.scss']
})
export class SelectedTeamInformationComponent {
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
}
