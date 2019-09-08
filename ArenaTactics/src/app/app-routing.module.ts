import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
    { path: '', loadChildren: () => import('./modules/overview/overview.module').then(m => m.OverviewModule) },
    { path: 'create', loadChildren: () => import('./modules/creation/creation.module').then(m => m.CreationModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
