import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UpdateRegisterComponent } from './update-register/update-register.component';

import { HomeComponent } from './home.component';
import { IndexComponent } from './index/index.component';
import { ModalDetailsComponent } from './modal-details/modal-details.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      { path: '', component: IndexComponent },
      { path: 'details/:id', component: ModalDetailsComponent },
      { path: 'update-register', component: UpdateRegisterComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
