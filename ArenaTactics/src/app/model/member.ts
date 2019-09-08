import { CharacterClass } from './character.class';
import { CharacterSpecialization } from './character.specialization';

export class Member {
    characterClass: CharacterClass;
    characterSpec: CharacterSpecialization;

    static getClassFromClassName(className: string): CharacterClass {
        switch (className) {
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

    static GetSpecFromSpecName(specName: string): CharacterSpecialization {
        switch (specName) {
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

    static getClassNameForMember(characterClass: CharacterClass): string {
        switch (characterClass) {
        case CharacterClass.Druid: return 'Druid';
        case CharacterClass.Hunter: return 'Hunter';
        case CharacterClass.Mage: return 'Mage';
        case CharacterClass.DeathKnight: return 'Death knight';
        case CharacterClass.DemonHunter: return 'Demon hunter';
        case CharacterClass.Monk: return 'Monk';
        case CharacterClass.Paladin: return 'Paladin';
        case CharacterClass.Priest: return 'Priest';
        case CharacterClass.Rogue: return 'Rogue';
        case CharacterClass.Shaman: return 'Shaman';
        case CharacterClass.Warlock: return 'Warlock';
        default: return 'Warrior';
        }
    }

    static getSpecNameForMember(characterSpec: CharacterSpecialization): string {
        switch (characterSpec) {
        case CharacterSpecialization.Balance: return 'Balance';
        case CharacterSpecialization.Feral: return 'Feral';
        case CharacterSpecialization.Guardian: return 'Guardian';
        case CharacterSpecialization.Restoration: return 'Restoration';
        case CharacterSpecialization.BeastMastery: return 'Beast Mastery';
        case CharacterSpecialization.Marksmanship: return 'Marksmanship';
        case CharacterSpecialization.Survival: return 'Survival';
        case CharacterSpecialization.Arcane: return 'Arcane';
        case CharacterSpecialization.Fire: return 'Fire';
        case CharacterSpecialization.Frost: return 'Frost';
        case CharacterSpecialization.Blood: return 'Blood';
        case CharacterSpecialization.Unholy: return 'Unholy';
        case CharacterSpecialization.Havoc: return 'Havoc';
        case CharacterSpecialization.Vengeance: return 'Vengeance';
        case CharacterSpecialization.Brewmaster: return 'Brewmaster';
        case CharacterSpecialization.Mistweaver: return 'Mistweaver';
        case CharacterSpecialization.Windwalker: return 'Windwalker';
        case CharacterSpecialization.Holy: return 'Holy';
        case CharacterSpecialization.Protection: return 'Protection';
        case CharacterSpecialization.Retribution: return 'Retribution';
        case CharacterSpecialization.Discipline: return 'Discipline';
        case CharacterSpecialization.Shadow: return 'Shadow';
        case CharacterSpecialization.Assassination: return 'Assassination';
        case CharacterSpecialization.Outlaw: return 'Outlaw';
        case CharacterSpecialization.Subtlety: return 'Subtlety';
        case CharacterSpecialization.Elemental: return 'Elemental';
        case CharacterSpecialization.Enhancement: return 'Enhancement';
        case CharacterSpecialization.Affliction: return 'Affliction';
        case CharacterSpecialization.Demonology: return 'Demonology';
        case CharacterSpecialization.Destruction: return 'Destruction';
        case CharacterSpecialization.Arms: return 'Arms';
        default: return 'Fury';
        }
    }

    static getMemberIcon(characterClass: CharacterClass): string {
        switch (characterClass) {
        case CharacterClass.Druid: return '../../../assets/druid.png';
        case CharacterClass.Hunter: return '../../../assets/hunter.png';
        case CharacterClass.Mage: return '../../../assets/mage.png';
        case CharacterClass.DeathKnight: return '../../../assets/death-knight.png';
        case CharacterClass.DemonHunter: return '../../../assets/demon-hunter.png';
        case CharacterClass.Monk: return '../../../assets/monk.png';
        case CharacterClass.Paladin: return '../../../assets/paladin.png';
        case CharacterClass.Priest: return '../../../assets/priest.png';
        case CharacterClass.Rogue: return '../../../assets/rogue.png';
        case CharacterClass.Shaman: return '../../../assets/shaman.png';
        case CharacterClass.Warlock: return '../../../assets/warlock.png';
        default: return '../../../assets/warrior.png';
        }
    }
}
