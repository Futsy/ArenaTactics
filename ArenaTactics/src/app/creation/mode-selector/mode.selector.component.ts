import { Component, Input, Output, EventEmitter, HostListener } from '@angular/core';

@Component({
    selector: 'app-mode-selector',
    templateUrl: './mode.selector.component.html',
    styleUrls: ['./mode.selector.component.scss']
})
export class ModeSelectorComponent {
    @Input() mode: string;
    @Output() selectedModeEvent = new EventEmitter<string>();

    @HostListener('click', ['$event'])
    selectedMode() {
        this.selectedModeEvent.emit(this.mode);
    }
}
