import { Component, Input, Output, EventEmitter, HostListener } from '@angular/core';

@Component({
    selector: 'app-mode-selector',
    templateUrl: './mode.selector.component.html',
    styleUrls: ['./mode.selector.component.scss']
})
export class ModeSelectorComponent {
    @Output() selectedModeEvent = new EventEmitter<string>();
    @Input() mode: string;

    @HostListener('click', [])
    selectedMode() {
        this.selectedModeEvent.emit(this.mode);
    }
}
