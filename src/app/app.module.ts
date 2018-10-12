import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { CustomMinValidatorDirective } from '../directives/custom-min-validator.directive';
import { CustomValueValidatorDirective } from '../directives/custom-value-validator.directive';

import { LoginService } from '../services/login.service';
import { FileService } from '../services/file.service';

import { LoginComponent } from './login/login.component';
import { HomepageComponent } from './homepage/homepage.component';

@NgModule({
  declarations: [
    AppComponent,

    CustomMinValidatorDirective,
    CustomValueValidatorDirective,

    LoginComponent,
    HomepageComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [LoginService, FileService],
  bootstrap: [AppComponent]
})
export class AppModule { }
