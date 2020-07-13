import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppLayoutComponent } from './app-layout.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [AppLayoutComponent],
  imports: [
    RouterModule,
    SharedModule
  ],
  exports: [AppLayoutComponent]
})
export class AppLayoutModule {}
