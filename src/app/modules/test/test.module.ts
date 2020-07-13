import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';

import { effects, featureKey, reducer } from './store';

import {TestComponent } from './components/test/test.component';
import {TestContainerComponent } from './containers/test/test.container';
import {TestRoutingModule } from './test-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
   TestComponent,
   TestContainerComponent
  ],
  imports: [
    CommonModule,
    TestRoutingModule,
    SharedModule,
    EffectsModule.forFeature(effects),
    StoreModule.forFeature(featureKey, reducer)
  ]
})
export class TestModule { }
