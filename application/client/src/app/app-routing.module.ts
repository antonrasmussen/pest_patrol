import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { PestsComponent } from './pests/pests.component';
import { PestDetailComponent } from './pest-detail/pest-detail.component';
import { MapComponent } from './map/map.component';

const routes: Routes = [
  { path: '', redirectTo: 'map', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:id', component: PestDetailComponent },
  { path: 'pests', component: PestsComponent },
  { path: 'pests/:id', component: PestsComponent },
  { path: 'map', component: MapComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}