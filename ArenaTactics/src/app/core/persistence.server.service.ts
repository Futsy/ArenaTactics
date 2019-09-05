import { Injectable } from '@angular/core';
import { Team } from '../model/team';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersistenceService {
    private subject = new Subject<Team[]>();
    private teams: Team[] = [];

    insertNewTeam(team: Team) {
        this.teams.push(team);
        this.subject.next(this.teams);
    }

    getCurrentTeams(): Team[] {
        return this.teams;
    }

    updatePersistenceObject(teams: Team[]) {
        this.teams = teams;
        this.subject.next(this.teams);
    }

    getPersistenceObject(): Observable<Team[]> {
        return this.subject.asObservable();
    }
}
