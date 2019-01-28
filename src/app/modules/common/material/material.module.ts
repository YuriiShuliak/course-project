import { CommonModule } from '@angular/common';
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from '@angular/core';
import { MatAutocompleteModule, MatButtonModule, MatCardModule, MatDividerModule, MatFormFieldModule, MatIconModule, MatInputModule, MatProgressSpinnerModule, MatTableModule, MatTabsModule, MatToolbarModule, MatTooltipModule } from '@angular/material';
import { TempPipe } from '../pipes/temp.pipe';

const MATERIAL_MODULES = [
  HttpClientModule,
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
  declarations: [TempPipe],
  imports: [
    CommonModule,
    ...MATERIAL_MODULES
  ],
  exports: [...MATERIAL_MODULES, TempPipe]
})
export class MaterialModule { }
