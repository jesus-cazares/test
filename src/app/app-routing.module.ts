import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppLayoutComponent } from './core/layout/app-layout.component';
import { APPLICATION_ROUTES } from './core/routes/application.routes';

const routes: Routes = [
  {
    path: 'home',
    component: AppLayoutComponent,
    children: APPLICATION_ROUTES
  },
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
