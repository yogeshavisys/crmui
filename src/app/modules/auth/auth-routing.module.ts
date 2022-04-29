import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { RegisterComponent } from './register/register.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { ErrorPage2Component } from './error-page2/error-page2.component';
import { ForgotPassFormComponent } from './forgot-pass-form/forgot-pass-form.component';


const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
    data: { title: ':: Epic :: Log In' }
  },
  {
    path: 'forgot-password',
    component: ForgotPasswordComponent,
    data: { title: ':: Epic :: Forgot Password' }
  },
  {
    path: 'register',
    component: RegisterComponent,
    data: { title: ':: Epic :: Register' }
  },
  {
    path: 'error-404',
    component: ErrorPageComponent,
    data: { title: ':: Epic :: Error-404' }
  },
  {
    path: 'error-500',
    component: ErrorPage2Component,
    data: { title: ':: Epic :: Error-500' }
  },
  {
    path: 'forgot-pass-forms',
    component: ForgotPassFormComponent,
    data: { title: ':: forgot-pass-forms' }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {
  static components = [
    LoginComponent,
    ForgotPasswordComponent
  ];

}