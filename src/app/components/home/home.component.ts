import { Component, OnInit } from '@angular/core';
import { DataTableService } from 'src/app/modules/shared/services/data-table.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  displayedColumns: string[] = [];
  dataSource: any;

  constructor(private dataTableService: DataTableService) {}

  ngOnInit(): void {
    this.dataTableService.getDataTableInfo$().subscribe((dataTableInfo) => {
      this.dataSource = dataTableInfo.dataInputSource;
    });
  }
}
