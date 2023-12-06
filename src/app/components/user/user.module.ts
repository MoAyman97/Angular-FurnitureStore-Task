import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { ViewProfileComponent } from './view-profile/view-profile.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { RouterModule, Routes } from '@angular/router';

const routes:Routes = [
  {path:'login',component:LoginComponent,title:'Login'},
  {path:'viewProfile',component:ViewProfileComponent,title:'viewProfile'},
  {path:'editProfile',component:EditProfileComponent,title:'editProfile'},
]
@NgModule({
  declarations: [
    LoginComponent,
    ViewProfileComponent,
    EditProfileComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class UserModule { }
