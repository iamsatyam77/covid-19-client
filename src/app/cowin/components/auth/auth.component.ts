import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent implements OnInit {
  private txnId = '';

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    // this.authService.generateOTP$('8958384481').subscribe((res) => {
    //   this.txnId = res.txnId;
    // });

    // this.authService.confirmOTP$({
    //   otp: '8d969eef6ecad3c29a3a629280e686cf0c3f5d5a86aff3ca12020c923adc6c92',
    //   txnId: this.txnId,
    // });
  }
}
