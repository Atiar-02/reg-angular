import { FormGroup, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  register = new FormGroup({
    id: new FormControl(''),
    phone: new FormControl(''),
    pass: new FormControl(''),
  });

  onSubmit() {
    console.log(this.register.value);
  }

  constructor() {}

  ngOnInit(): void {}
}
