import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { DatepickerModule, BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { HrmsComponent } from './src/app/app/modules/client/hrms/hrms.component';
import { AppRoutingModule } from './app-routing.module';
import { FeatureComponent } from './modules/crm/crmCompont/feature/feature.component';
import { ForgotPassFormComponent } from './modules/auth/forgot-pass-form/forgot-pass-form.component';
import { LoginAdminComponent } from './modules/admin/login-admin/login-admin.component';



@NgModule({
  declarations: [
    AppComponent,
    HrmsComponent,
    ForgotPassFormComponent,
    FeatureComponent,
    LoginAdminComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    BsDatepickerModule.forRoot(),
    CarouselModule.forRoot(),
    ToastrModule.forRoot({
      positionClass: 'toast-top-center',
    })
  ],
  providers: [BsDatepickerModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
