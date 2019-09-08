import { Component, OnInit } from '@angular/core';
import { PersistenceService } from 'src/app/core/persistence.server.service';
import { Team } from 'src/app/model/team';

@Component({
    selector: 'app-import-export',
    templateUrl: './import.export.component.html',
    styleUrls: ['./import.export.component.scss']
})
export class ImportExportComponent implements OnInit {
    importExportString: string;
    valid: boolean;

    constructor(
        private persistenceServer: PersistenceService
    ) {}

    ngOnInit() {
        this.valid = true;
        this.importExportString = JSON.stringify(this.persistenceServer.getCurrentTeams());
    }

    onChange(newValue: string) {
        this.importExportString = newValue;
        try {
            const newModel: Team[] = JSON.parse(this.importExportString);
            this.persistenceServer.updatePersistenceObject(newModel);
        } catch (err) {
            this.valid = false;
        }
    }

    getValidationStyle(): any {
        return {
            border: this.valid ? '1px solid green' : '1px solid red'
        };
    }
}
