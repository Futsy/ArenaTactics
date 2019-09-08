import { Injectable, OnInit } from '@angular/core';
import { Team } from '../model/team';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersistenceService {
    private subject = new Subject<Team[]>();
    private teams: Team[] = [];
    private storageKey: string;

    constructor() {
        this.storageKey = 'arena-tactics-variable';

        if (localStorage.getItem(this.storageKey) !== null) {
            try {
                this.teams = JSON.parse(localStorage.getItem(this.storageKey));
            } catch (err) {
                localStorage.setItem(this.storageKey, JSON.stringify(this.teams));
            }
        } else {
            localStorage.setItem(this.storageKey, JSON.stringify(this.teams));
        }
    }

    insertNewTeam(team: Team) {
        this.teams.push(team);
        localStorage.setItem(this.storageKey, JSON.stringify(this.teams));
        this.subject.next(this.teams);
    }

    getCurrentTeams(): Team[] {
        return this.teams;
    }

    updatePersistenceObject(teams: Team[]) {
        this.teams = teams;
        localStorage.setItem(this.storageKey, JSON.stringify(this.teams));
        this.subject.next(this.teams);
    }

    getPersistenceObject(): Observable<Team[]> {
        return this.subject.asObservable();
    }

    persistObject() {
        localStorage.setItem(this.storageKey, JSON.stringify(this.teams));
    }
}
