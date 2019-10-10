import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/auth/login/login.component';
import { ScheduleComponent } from './components/page/schedule/schedule.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: ScheduleComponent,
  },
  /*{
    path: 'schedule',
    component: ScheduleComponent,
  },*/
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
