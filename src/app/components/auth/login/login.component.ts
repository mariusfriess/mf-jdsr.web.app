import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mf-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  submitForm() {
    console.log('----- Form submitted -----');
  }
}
