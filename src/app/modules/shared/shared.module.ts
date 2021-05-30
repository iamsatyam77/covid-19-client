import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataTableComponent } from './components/data-table/data-table.component';
import { MaterialModule } from 'src/app/material/material.module';

@NgModule({
  declarations: [DataTableComponent],
  imports: [CommonModule, MaterialModule],
  exports: [DataTableComponent],
})
export class SharedModule {}
