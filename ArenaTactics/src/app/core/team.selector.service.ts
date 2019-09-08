import { Injectable } from '@angular/core';
import { Team } from '../model/team';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TeamSelectorService {
    private subject = new Subject<Team>();
    private team: Team;

    getCurrentTeam(): Team {
        return this.team;
    }

    updatePersistenceObject(team: Team) {
        this.team = team;
        this.subject.next(this.team);
    }

    getPersistenceObject(): Observable<Team> {
        return this.subject.asObservable();
    }
}
