import { Component, OnInit } from '@angular/core';
import { AppointmentService } from '../../services/appointment.service';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.scss'],
})
export class AppointmentComponent implements OnInit {
  constructor(private appointmentService: AppointmentService) {}

  ngOnInit(): void {
    // this.appointmentService
    //   .findAppointmentByPin$({ pincode: '247001', date: '31-05-2021' })
    //   .subscribe();

    // this.appointmentService
    // .findAppointmentByDistrict$({ districtId: '34', date: '31-05-2021' })
    // .subscribe();

    // this.appointmentService
    //   .findAppointmentByLatLong$({ lat: 29.967079, long: 77.551018 })
    //   .subscribe();

    // this.appointmentService
    //   .findCalendarByPin$({ pincode: '247001', date: '31-05-2021' })
    //   .subscribe();

    // this.appointmentService
    //   .findCalendarByDistrict$({ districtId: '34', date: '31-05-2021' })
    //   .subscribe();

    // this.appointmentService
    //   .findCalendarByCenter$({ centerId: '718155', date: '31-05-2021' })
    //   .subscribe();
  }
}
