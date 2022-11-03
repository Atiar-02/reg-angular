import { FormGroup, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css'],
})
export class LoginFormComponent implements OnInit {
  loginForm = new FormGroup({
    phone: new FormControl(''),
    pass: new FormControl(''),
  });

  onSubmit() {
    console.log(this.loginForm.value);
  }

  constructor() {}

  ngOnInit(): void {}
}
