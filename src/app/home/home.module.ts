import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { IndexComponent } from './index/index.component';
import { NavbarComponent } from '../components/navbar/navbar.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ModalDetailsComponent } from './modal-details/modal-details.component';
import { UpdateRegisterComponent } from './update-register/update-register.component';
import { ForNumberPipe } from '../pipes/for-number.pipe';


@NgModule({
  declarations: [
    HomeComponent,
    IndexComponent,
    NavbarComponent,
    ModalDetailsComponent,
    UpdateRegisterComponent,
    ForNumberPipe
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    FormsModule,
    ReactiveFormsModule,

  ]
})
export class HomeModule { }
