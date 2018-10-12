import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {AuthService} from '../services/auth/auth.service';
import {AuthGuardService as authGuard} from '../services/auth/auth-guard.service';

import {LoginComponent} from './login/login.component';
import {HomepageComponent} from './homepage/homepage.component';

const routes: Routes = [
  {
    path: '', canActivate: [authGuard], children: [
      {
        path: '',
        children: [
          {path: 'homepage', component: HomepageComponent},
        ],
      }],
  },
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent, canActivate: [ authGuard ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthService, authGuard]
})

export class AppRoutingModule {
}
