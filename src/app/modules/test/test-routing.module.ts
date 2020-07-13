import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TestContainerComponent } from './containers/test/test.container';

const routes: Routes = [
  {
    path: '',
    component: TestContainerComponent, pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TestRoutingModule { }
