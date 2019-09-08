import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Member } from 'src/app/model/member';
import { CharacterClass } from 'src/app/model/character.class';
import { CharacterSpecialization } from 'src/app/model/character.specialization';

@Component({
    selector: 'app-class-selector',
    templateUrl: './class.selector.component.html',
    styleUrls: ['./class.selector.component.scss']
})
export class ClassSelectorComponent {
    @Input() className: string;
    @Input() classImage: string;
    @Input() specs: string[];

    @Output() selectedSpecEvent = new EventEmitter<Member>();

    selectedSpec(spec: string) {
        this.selectedSpecEvent.emit({
            characterClass: this.getClassFromClassName(),
            characterSpec: this.getSpecFromSpecName(spec)
        } as Member);
    }

    getClassFromClassName(): CharacterClass {
        return Member.getClassFromClassName(this.className);
    }

    getSpecFromSpecName(spec: string): CharacterSpecialization {
        return Member.GetSpecFromSpecName(spec);
    }
}
