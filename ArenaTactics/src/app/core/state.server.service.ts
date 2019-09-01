import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { State } from '../model/state';

@Injectable({
  providedIn: 'root'
})
export class StateService {
    private subject = new Subject<State>();

    updateState(state: State) {
        this.subject.next(state);
    }

    getState(): Observable<State> {
        return this.subject.asObservable();
    }
}
