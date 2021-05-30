import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

export interface IDataTable {
  dataInputSource: any;
}

@Injectable({
  providedIn: 'root',
})
export class DataTableService {
  private dataTable = new Subject<IDataTable>();

  constructor() {}

  getDataTableInfo$(): Observable<IDataTable> {
    return this.dataTable.asObservable();
  }

  setDataTableInfo(dataTableInfo: IDataTable): void {
    this.dataTable.next(dataTableInfo);
  }
}
