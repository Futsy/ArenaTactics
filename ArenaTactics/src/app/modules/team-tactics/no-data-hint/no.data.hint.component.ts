import { Component, Input } from '@angular/core';
import { Team } from 'src/app/model/team';

@Component({
    selector: 'app-no-data-hint',
    templateUrl: './no.data.hint.component.html',
    styleUrls: ['./no.data.hint.component.scss']
})
export class NoDataHintComponent {
    @Input() team: Team;
}
