import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {


  RegisterForm: FormGroup;

  constructor(public formbuilder: FormBuilder, private router: Router) {
    //validate form
    this.RegisterForm = this.formbuilder.group({
      fullname: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.minLength(10), Validators.pattern(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)]],
      password: ['', [Validators.required, Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')]],
      passwordconfirm: ['', [Validators.required, Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')]],
    });
  }

  ngOnInit(): void {
  }

  onRegister() {
    const password = this.RegisterForm.value.password;
    const passwordconfirm = this.RegisterForm.value.passwordconfirm;

    if (password === passwordconfirm) {
      localStorage.setItem('user', JSON.stringify(this.RegisterForm.value));
      this.router.navigate(['/auth']);
      alert('Saved user')
    } else {
      alert('Passwords do not match');
      this.RegisterForm.reset();
    }
  }
  get email() { return this.RegisterForm.get('email'); }
  get password() { return this.RegisterForm.get('password'); }
}
