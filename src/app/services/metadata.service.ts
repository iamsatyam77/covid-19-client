import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IDistrictResponse, IStateResponse } from '../models/states.model';

@Injectable({
  providedIn: 'root',
})
export class MetadataService {
  constructor(private http: HttpClient) {}

  getStates$(): Observable<IStateResponse> {
    return this.http.get<IStateResponse>(`/api/admin/location/states`);
  }

  getDistrictsByStateId$(stateId: string): Observable<IDistrictResponse> {
    return this.http.get<IDistrictResponse>(
      `/api/admin/location/districts/${stateId}`
    );
  }
}
