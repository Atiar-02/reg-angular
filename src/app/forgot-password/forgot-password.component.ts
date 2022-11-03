import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css'],
})
export class ForgotPasswordComponent implements OnInit {
  resetForm = new FormGroup({
    phoneNumber: new FormControl(''),
  });

  onSubmit() {
    console.log(this.resetForm.value);
  }

  constructor() {}

  ngOnInit(): void {
    this.resetForm = new FormGroup({
      phoneNumber: new FormControl('', [
        Validators.required,
        Validators.minLength(8),
      ]),
    });
  }
}
