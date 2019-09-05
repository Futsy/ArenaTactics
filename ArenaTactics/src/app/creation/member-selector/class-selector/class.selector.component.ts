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
        switch (this.className) {
        case 'Druid': return CharacterClass.Druid;
        case 'Hunter': return CharacterClass.Hunter;
        case 'Mage': return CharacterClass.Mage;
        case 'Death knight': return CharacterClass.DeathKnight;
        case 'Demon hunter': return CharacterClass.DemonHunter;
        case 'Monk': return CharacterClass.Monk;
        case 'Paladin': return CharacterClass.Paladin;
        case 'Priest': return CharacterClass.Priest;
        case 'Rogue': return CharacterClass.Rogue;
        case 'Shaman': return CharacterClass.Shaman;
        case 'Warlock': return CharacterClass.Warlock;
        default: return CharacterClass.Warrior;
        }
    }

    getSpecFromSpecName(spec: string): CharacterSpecialization {
        switch (spec) {
        case 'Balance': return CharacterSpecialization.Balance;
        case 'Feral': return CharacterSpecialization.Feral;
        case 'Guardian': return CharacterSpecialization.Guardian;
        case 'Restoration': return CharacterSpecialization.Restoration;
        case 'Beast Mastery': return CharacterSpecialization.BeastMastery;
        case 'Marksmanship': return CharacterSpecialization.Marksmanship;
        case 'Survival': return CharacterSpecialization.Survival;
        case 'Arcane': return CharacterSpecialization.Arcane;
        case 'Fire': return CharacterSpecialization.Fire;
        case 'Frost': return CharacterSpecialization.Frost;
        case 'Blood': return CharacterSpecialization.Blood;
        case 'Unholy': return CharacterSpecialization.Unholy;
        case 'Havoc': return CharacterSpecialization.Havoc;
        case 'Vengeance': return CharacterSpecialization.Vengeance;
        case 'Brewmaster': return CharacterSpecialization.Brewmaster;
        case 'Mistweaver': return CharacterSpecialization.Mistweaver;
        case 'Windwalker': return CharacterSpecialization.Windwalker;
        case 'Holy': return CharacterSpecialization.Holy;
        case 'Protection': return CharacterSpecialization.Protection;
        case 'Retribution': return CharacterSpecialization.Retribution;
        case 'Discipline': return CharacterSpecialization.Discipline;
        case 'Shadow': return CharacterSpecialization.Shadow;
        case 'Assassination': return CharacterSpecialization.Assassination;
        case 'Outlaw': return CharacterSpecialization.Outlaw;
        case 'Subtlety': return CharacterSpecialization.Subtlety;
        case 'Elemental': return CharacterSpecialization.Elemental;
        case 'Enhancement': return CharacterSpecialization.Enhancement;
        case 'Affliction': return CharacterSpecialization.Affliction;
        case 'Demonology': return CharacterSpecialization.Demonology;
        case 'Destruction': return CharacterSpecialization.Destruction;
        case 'Arms': return CharacterSpecialization.Arms;
        default: return CharacterSpecialization.Fury;
        }
    }
}
