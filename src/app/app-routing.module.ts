import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ChartComponent} from './chart/chart.component';
import {AudittrailComponent} from './audittrail.component';
const routes: Routes = [
  { path: '', redirectTo: 'audittrail', pathMatch: 'full' },
  { path: 'audittrail', component: AudittrailComponent },
  { path: 'chart', component: ChartComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
