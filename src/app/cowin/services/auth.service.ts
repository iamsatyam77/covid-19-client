import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import {
  IConfirmOTP,
  IGenerateOTPRespone,
  IToken,
} from 'src/app/models/auth.model';
import { StorageService } from 'src/app/services/storage.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    private http: HttpClient,
    private storageService: StorageService
  ) {}

  generateOTP$(mobile: string): Observable<IGenerateOTPRespone> {
    return this.http
      .post<IGenerateOTPRespone>(`/api/auth/public/generateOTP`, {
        mobile,
      })
      .pipe(tap((res) => this.storageService.setItem('txnId', res)));
  }

  confirmOTP$(confirmOTP: IConfirmOTP): Observable<IToken> {
    return this.http
      .post<IToken>(`/api/auth/public/confirmOTP`, confirmOTP)
      .pipe(tap((res) => this.storageService.setItem('token', res)));
  }
}
