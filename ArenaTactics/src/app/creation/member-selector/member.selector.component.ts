import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Member } from 'src/app/model/member';

@Component({
    selector: 'app-member-selector',
    templateUrl: './member.selector.component.html',
    styleUrls: ['./member.selector.component.scss']
})
export class MemberSelectorComponent {
    @Input() playerNumber: number;
    @Output() selectedPlayerEvent = new EventEmitter<Member>();

    selectedCombination(member: Member) {
        this.selectedPlayerEvent.emit(member);
    }

    getPlayerNumberTextual(): string {
        switch (this.playerNumber) {
        case 1: return 'first player';
        case 2: return 'second player';
        default: return 'third player';
        }
    }
}
