import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OverviewComponent } from './overview/overview.component';
import { CreationComponent } from './creation/creation.component';


const routes: Routes = [
    { path: '', component: OverviewComponent },
    { path: 'create', component: CreationComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
