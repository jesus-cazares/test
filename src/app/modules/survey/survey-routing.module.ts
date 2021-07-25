import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SurveyContainer } from './containers/survey/survey.container';

const routes: Routes = [
  {
    path: '',
    component: SurveyContainer, pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SurveyRoutingModule { }
