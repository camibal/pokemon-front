import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../../interface/user';

@Component({
  selector: 'app-update-register',
  templateUrl: './update-register.component.html',
  styleUrls: ['./update-register.component.scss']
})
export class UpdateRegisterComponent implements OnInit {
  object;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.object = JSON.parse(localStorage.getItem("user"));
  }

  onRegister() {
    const password = this.object.password;
    const passwordconfirm = this.object.passwordconfirm;
    if (password === passwordconfirm) {
      localStorage.setItem('user', JSON.stringify(this.object));
      alert('Updated user')
      this.router.navigate(['/']);
    } else {
      alert('Passwords do not match');
      this.object.reset();
    }
  }
}
