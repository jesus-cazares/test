import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';

import { effects, featureKey, reducer } from './store';

import { SharedModule } from 'src/app/shared/shared.module';
import { SurveyComponent } from './components/survey/survey.component';
import { SurveyContainer } from './containers/survey/survey.container';
import { SurveyRoutingModule } from './survey-routing.module';

@NgModule({
  declarations: [
   SurveyComponent,
   SurveyContainer
  ],
  imports: [
    CommonModule,
    SurveyRoutingModule,
    SharedModule,
    EffectsModule.forFeature(effects),
    StoreModule.forFeature(featureKey, reducer)
  ]
})
export class SurveyModule { }
