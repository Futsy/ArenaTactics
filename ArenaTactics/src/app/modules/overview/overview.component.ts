import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-overview',
    templateUrl: './overview.component.html',
    styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {
    importExport: boolean;

    ngOnInit() {
        this.importExport = false;
    }

    openImportExport(importExport: boolean) {
        this.importExport = importExport;
    }
}
