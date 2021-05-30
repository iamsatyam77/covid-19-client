import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../cowin/services/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent implements OnInit {
  private txnId = '';

  registrationForm!: FormGroup;

  verificationForm!: FormGroup;

  registrationFormSubmitted = false;

  verificationFormSubmitted = false;

  constructor(
    private authService: AuthService,
    private formBuilder: FormBuilder
  ) {
    this.registrationForm = this.formBuilder.group({
      mobile: [
        '',
        [
          Validators.required,
          Validators.minLength(10),
          Validators.maxLength(10),
        ],
      ],
    });

    this.verificationForm = this.formBuilder.group({
      otp: [
        '',
        [Validators.required, Validators.minLength(6), Validators.maxLength(6)],
      ],
    });
  }

  ngOnInit(): void {}

  onRegisterFormSubmit(): void {
    if (this.registrationForm.valid) {
      const mobileNumber = this.registrationForm.controls.mobile.value;
      this.authService.generateOTP$(mobileNumber).subscribe((res) => {
        this.txnId = res.txnId;
        this.registrationFormSubmitted = true;
      });
    }
  }

  onVerificationFormSubmit(): void {
    if (this.verificationForm.valid) {
      const confirmOTP = { ...this.verificationForm.value, txnId: this.txnId };
      this.authService.confirmOTP$(confirmOTP).subscribe((res) => {
        this.verificationFormSubmitted = true;
      });
    }
  }
}
