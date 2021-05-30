import { Component, Input, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss'],
})
export class DataTableComponent implements OnInit {
  @Input() dataTableInput!: any;
  dataInputSource = new MatTableDataSource<any>();
  headerRow!: string[];
  constructor() {}

  ngOnInit(): void {
    if (this.dataTableInput) {
      this.dataInputSource.data = this.dataTableInput;
      this.headerRow = Object.keys(this.dataTableInput?.[0]).filter(
        (i) => !i.includes('_id')
      );
    }
  }
}
