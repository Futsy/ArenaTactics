import { Component, OnInit, OnDestroy } from '@angular/core';
import { State } from './model/state';
import { StateService } from './core/state.server.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
    stateSubscription: Subscription;
    state: State;

    constructor(
        private stateServer: StateService
    ) {}

    ngOnInit() {
        this.stateSubscription = this.stateServer.getState()
            .subscribe(state => this.state = state);
    }

    ngOnDestroy() {
        this.stateSubscription.unsubscribe();
    }

    isCreating(): boolean {
        return this.state === State.Create;
    }
}
