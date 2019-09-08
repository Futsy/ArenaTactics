import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { MemberIconsComponent } from './member-icons/member.icons.component';
import { RouterModule } from '@angular/router';
import { ClassSelectorComponent } from './member-selector/class-selector/class.selector.component';
import { MemberSelectorComponent } from './member-selector/member.selector.component';

@NgModule({
    declarations: [
        HeaderComponent,
        MemberIconsComponent,
        ClassSelectorComponent,
        MemberSelectorComponent
    ],
    imports: [
        CommonModule,
        RouterModule
    ],
    exports: [
        HeaderComponent,
        MemberIconsComponent,
        ClassSelectorComponent,
        MemberSelectorComponent
    ]
})
export class SharedModule { }
