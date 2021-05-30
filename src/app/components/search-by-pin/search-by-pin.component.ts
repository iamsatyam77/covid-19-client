import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AppointmentService } from 'src/app/cowin/services/appointment.service';
import { IAppointmentByPin } from 'src/app/cowin/models/appointment.model';
import { Utility } from 'src/app/utilities/utility';
import { DataTableService } from 'src/app/modules/shared/services/data-table.service';

@Component({
  selector: 'app-search-by-pin',
  templateUrl: './search-by-pin.component.html',
  styleUrls: ['./search-by-pin.component.scss'],
})
export class SearchByPinComponent implements OnInit {
  searchByPINForm!: FormGroup;

  constructor(
    private appointmentService: AppointmentService,
    private dataTableService: DataTableService,
    private formBuilder: FormBuilder
  ) {
    this.searchByPINForm = this.formBuilder.group({
      pincode: ['', Validators.required],
      date: [Utility.getMoment(), Validators.required],
    });
  }

  ngOnInit(): void {}

  onFormSubmit(): void {
    if (this.searchByPINForm.valid) {
      const appointment: IAppointmentByPin = { ...this.searchByPINForm.value };
      appointment.date = Utility.formatDate(
        this.searchByPINForm.controls.date.value._d
      );
      this.appointmentService
        .findAppointmentByPin$(appointment)
        .subscribe((sessionsResponse) => {
          this.dataTableService.setDataTableInfo({
            dataInputSource: sessionsResponse.sessions,
          });
        });
    }
  }
}
