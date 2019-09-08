import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TeamTacticsComponent } from './team.tactics.component';
import { SelectedTeamInformationComponent } from './selected-team-information/selected.team.information.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { MatchupWrapperComponent } from './matchup-wrapper/matchup.wrapper.component';
import { NoDataHintComponent } from './no-data-hint/no.data.hint.component';
import { MatchupCreatorComponent } from './matchup-creator/matchup.creator.component';
import { TacticFormComponent } from './tactic-form/tactic.form.component';

@NgModule({
    declarations: [
        TeamTacticsComponent,
        SelectedTeamInformationComponent,
        MatchupWrapperComponent,
        NoDataHintComponent,
        MatchupCreatorComponent,
        TacticFormComponent
    ],
    imports: [
        CommonModule,
        SharedModule,
        FormsModule
    ],
    exports: [
        TeamTacticsComponent
    ]
})
export class TeamTacticsModule { }
