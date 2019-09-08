import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ImportExportComponent } from './import.export.component';

@NgModule({
    declarations: [
        ImportExportComponent
    ],
    imports: [
        CommonModule,
        FormsModule
    ],
    exports: [
        ImportExportComponent
    ]
})
export class ImportExportModule { }
