import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { TeamSelectorService } from 'src/app/core/team.selector.service';
import { Team } from 'src/app/model/team';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-content',
    templateUrl: './content.component.html',
    styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit, OnDestroy {
    @Input() importExport: boolean;

    teamSelectorSubscription: Subscription;
    team: Team;

    constructor(
        private teamSelectorServer: TeamSelectorService
    ) {}

    ngOnInit() {
        this.teamSelectorSubscription = this.teamSelectorServer.getPersistenceObject()
            .subscribe(team => this.team = team);
        this.team = this.teamSelectorServer.getCurrentTeam();
    }

    ngOnDestroy() {
        this.teamSelectorSubscription.unsubscribe();
    }
}
