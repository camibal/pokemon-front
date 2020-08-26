import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  LoginForm: FormGroup;

  constructor(public formbuilder: FormBuilder, private router: Router) {
    //validate form
    this.LoginForm = this.formbuilder.group({
      email: ['', [Validators.required, Validators.minLength(10), Validators.pattern(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)]],
      password: ['', [Validators.required, Validators.minLength(3)]],
    });
  }

  ngOnInit(): void {
  }

  onLogin() {
    const object = JSON.parse(localStorage.getItem("user"));
    const email = object.email
    const password = object.password

    if (email === this.LoginForm.value.email) {
      if (password === this.LoginForm.value.password) {
        localStorage.setItem('token', JSON.stringify(this.LoginForm.value));
        this.router.navigate(['/index']);
      } else {
        alert('Invalid Password');
        this.LoginForm.reset();
      }
    } else {
      alert('Invalid Email');
      this.LoginForm.reset();
    }
  }

  get email() { return this.LoginForm.get('email'); }
  get password() { return this.LoginForm.get('password'); }
}
