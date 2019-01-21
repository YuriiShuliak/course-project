import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatAutocompleteModule, MatButtonModule, MatCardModule, MatFormFieldModule, MatIconModule, MatInputModule, MatProgressSpinnerModule, MatTabsModule, MatToolbarModule } from '@angular/material';

const MATERIAL_MODULES = [
  MatToolbarModule,
  MatIconModule,
  MatInputModule,
  MatFormFieldModule,
  MatButtonModule,
  MatAutocompleteModule,
  MatCardModule,
  MatProgressSpinnerModule,
  MatTabsModule
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ...MATERIAL_MODULES
  ],
  exports: [...MATERIAL_MODULES]
})
export class MaterialModule { }
