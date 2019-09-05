import { Component, OnInit } from '@angular/core';
import { Team } from '../model/team';
import { CharacterClass } from '../model/character.class';
import { Member } from '../model/member';
import { Router } from '@angular/router';

@Component({
    selector: 'app-creation',
    templateUrl: './creation.component.html',
    styleUrls: ['./creation.component.scss']
})
export class CreationComponent implements OnInit {
    selected2v2: boolean;
    selected3v3: boolean;

    team: Team;

    addingTeam: boolean;

    constructor(
        private router: Router
    ) {}

    ngOnInit() {
        this.selected2v2 = false;
        this.selected3v3 = false;

        // Start of with an empty team
        this.team = {
            members: []
        };

        this.addingTeam = false;
    }

    hasSelectedFormat(): boolean {
        return this.selected2v2 || this.selected3v3;
    }

    modeSelected(event: string) {
        const is2v2 = event === '2v2';
        this.selected2v2 = is2v2;
        this.selected3v3 = !is2v2;
    }

    getMembersInTeam(): number {
        return this.team.members.length;
    }

    addMemberToTeam(member: Member) {
        this.team.members.push(member);
        this.team.members = this.team.members.slice();
    }

    quitCreation() {
        this.router.navigate(['']);
    }
}
