import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {
  Center,
  IAppointmentByCenter,
  IAppointmentByDistrict,
  IAppointmentByLatLong,
  IAppointmentByPin,
  ICenterResponse,
  ISessionCalendarEntry,
  ISessions,
} from '../models/appointment.model';

@Injectable({
  providedIn: 'root',
})
export class AppointmentService {
  constructor(private http: HttpClient) {}

  findAppointmentByPin$(appointment: IAppointmentByPin): Observable<ISessions> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Accept-Language': 'hi_IN',
      }),
    };
    return this.http.get<ISessions>(
      `/api/appointment/sessions/public/findByPin?pincode=${appointment.pincode}&date=${appointment.date}`,
      httpOptions
    );
  }

  findAppointmentByDistrict$(
    appointment: IAppointmentByDistrict
  ): Observable<ISessions> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Accept-Language': 'hi_IN',
      }),
    };
    return this.http.get<ISessions>(
      `/api/appointment/sessions/public/findByDistrict?district_id=${appointment.districtId}&date=${appointment.date}`,
      httpOptions
    );
  }

  findAppointmentByLatLong$(
    appointment: IAppointmentByLatLong
  ): Observable<ICenterResponse> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Accept-Language': 'hi_IN',
      }),
    };
    return this.http.get<ICenterResponse>(
      `/api/appointment/centers/public/findByLatLong?lat=${appointment.lat}&long=${appointment.long}`,
      httpOptions
    );
  }

  findCalendarByPin$(
    appointment: IAppointmentByPin
  ): Observable<ISessionCalendarEntry> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Accept-Language': 'hi_IN',
      }),
    };
    return this.http.get<ISessionCalendarEntry>(
      `/api/appointment/sessions/public/calendarByPin?pincode=${appointment.pincode}&date=${appointment.date}`,
      httpOptions
    );
  }

  findCalendarByDistrict$(
    appointment: IAppointmentByDistrict
  ): Observable<ISessionCalendarEntry> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Accept-Language': 'hi_IN',
      }),
    };
    return this.http.get<ISessionCalendarEntry>(
      `/api/appointment/sessions/public/calendarByDistrict?district_id=${appointment.districtId}&date=${appointment.date}`,
      httpOptions
    );
  }

  findCalendarByCenter$(appointment: IAppointmentByCenter): Observable<Center> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Accept-Language': 'hi_IN',
      }),
    };
    return this.http.get<Center>(
      `/api/appointment/sessions/public/calendarByCenter?center_id=${appointment.centerId}&date=${appointment.date}`,
      httpOptions
    );
  }
}
