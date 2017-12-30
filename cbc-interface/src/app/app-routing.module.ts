import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MyActivitiesComponent } from './my-activities/my-activities.component';
import { ComplexityComponent } from './complexity/complexity.component'
import { OptimizerComponent } from './optimizer/optimizer.component'
import { LeafletComponent } from './optimizer/leaflet/leaflet.component'

const appRoutes: Routes = [
  { path: '', redirectTo: '/my-activities', pathMatch: 'full' },
  { path: 'my-activities', component: MyActivitiesComponent },
  { path: 'complexity', component: ComplexityComponent },
  { path: 'optimizer', component: OptimizerComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
