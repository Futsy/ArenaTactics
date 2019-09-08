import { Component, Input } from '@angular/core';
import { Team } from 'src/app/model/team';
import { Member } from 'src/app/model/member';
import { CharacterClass } from 'src/app/model/character.class';

@Component({
    selector: 'app-member-icons',
    templateUrl: './member.icons.component.html',
    styleUrls: ['./member.icons.component.scss']
})
export class MemberIconsComponent {
    @Input() team: Team;
    @Input() iconSize: number;

    getMemberIcon(member: Member): string {
        return Member.getMemberIcon(member.characterClass);
    }

    getClassNameForMember(member: Member): string {
        return Member.getClassNameForMember(member.characterClass);
    }
}
