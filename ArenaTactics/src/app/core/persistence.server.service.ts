import { Injectable } from '@angular/core';
import { Team } from '../model/team';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersistenceService {
    private subject = new Subject<Team[]>();

    updatePersistenceObject(teams: Team[]) {
        this.subject.next(teams);
    }

    getPersistenceObject(): Observable<Team[]> {
        return this.subject.asObservable();
    }
}
