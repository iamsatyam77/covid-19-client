import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CowinRoutingModule } from './cowin-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AppointmentComponent } from './components/appointment/appointment.component';
import { CertificateComponent } from './components/certificate/certificate.component';

@NgModule({
  declarations: [
    DashboardComponent,
    AppointmentComponent,
    CertificateComponent,
  ],
  imports: [CommonModule, CowinRoutingModule, HttpClientModule],
})
export class CowinModule {}
