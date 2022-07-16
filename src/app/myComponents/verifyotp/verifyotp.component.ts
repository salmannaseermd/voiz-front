import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegistrationService } from 'src/app/registration.service';
import { Smspojo } from 'src/app/smspojo';

@Component({
  selector: 'app-verifyotp',
  templateUrl: './verifyotp.component.html',
  styleUrls: ['./verifyotp.component.css']
})
export class VerifyotpComponent implements OnInit {

  smspojo = new Smspojo();
  msg = ""
  trueOrFalse: boolean;
  otpval: string;
  constructor(private _service: RegistrationService, private _router: Router) { }

  ngOnInit(): void {
  }

  otp = Math.floor(Math.random() * Math.floor(10000));
  message: string;
  message1: string;
  verifyotp(otpval: string) {

    // if (this.otp == parseInt(otpval)) {
    //   this.message = "OTP verified successfully Please press on RESET NOW";
    //   this.message1 = "green";
    //   this.trueOrFalse = false
    // }
    // else {
    //   this.message = "Sorry OTP Not matched";
    //   this.message1 = "red";
    // }

    this._service.verifyotp(this.smspojo).subscribe(

      (data) => {
        //success
        console.log(data);
        // alert('success');
        this._router.navigate(['/resetpassword'])
      },
      (error) => {
        //error
        console.log(error);
        alert('Enter correct credentials');
        // this._router.navigate(['/verifyotp'])
      }
    );

  }

}
