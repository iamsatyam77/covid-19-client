import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IToken } from 'src/app/models/auth.model';
import { StorageService } from 'src/app/services/storage.service';
import { Center } from '../models/appointment.model';
import { ICertificate } from '../models/certificate,model';

@Injectable({
  providedIn: 'root',
})
export class CertificateService {
  private token = '';

  constructor(
    private http: HttpClient,
    private storageService: StorageService
  ) {
    const tokenObject = this.storageService.getItem<IToken>('token');
    if (tokenObject) {
      this.token = tokenObject.token;
    }
  }

  downloadCertificate(certificate: ICertificate) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: `Bearer ${this.token}`,
      }),
    };
    return this.http.get<Center>(
      `/api/registration/certificate/public/download?beneficiary_reference_id=${certificate.beneficiaryReferenceId}`,
      httpOptions
    );
  }
}
