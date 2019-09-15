import { NgModule } from '@angular/core';
import {
  MatFormFieldModule,
  MatInputModule,
  MatButtonModule,
} from '@angular/material';

@NgModule({
  exports: [MatFormFieldModule, MatInputModule, MatButtonModule],
})
export class MaterialModule {}
