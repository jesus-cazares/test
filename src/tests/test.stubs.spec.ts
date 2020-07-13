import { NgModule } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [ FormsModule, ReactiveFormsModule ],
  providers: [ FormBuilder ],
  declarations: [
  ],
  exports: [
  ]
})
export class StubsModule {}
