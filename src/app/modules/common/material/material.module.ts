import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatAutocompleteModule, MatButtonModule, MatCardModule, MatDividerModule, MatFormFieldModule, MatIconModule, MatInputModule, MatProgressSpinnerModule, MatTableModule, MatTabsModule, MatToolbarModule, MatTooltipModule } from '@angular/material';

const MATERIAL_MODULES = [
  MatToolbarModule,
  MatIconModule,
  MatInputModule,
  MatFormFieldModule,
  MatButtonModule,
  MatAutocompleteModule,
  MatCardModule,
  MatProgressSpinnerModule,
  MatTabsModule,
  MatTableModule,
  MatDividerModule,
  MatTooltipModule
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
