import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {NgForm} from '@angular/forms';
import {LoginService} from '../../services/login.service';
import UserApi from '../api/UserApi';
import {BaseComponent} from '../BaseComponent';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent extends BaseComponent implements OnInit {
  username: string;
  password: string;

  constructor(private http: HttpClient, router: Router, route: ActivatedRoute, private authService: LoginService) {
    super(route, router);
  }

  async ngOnInit() { }

  async getToken() {
    const username = this.username;
    const password = this.password;
    try {
      const response = this.authService.getAccessToken(username, password);
      return response;
    } catch (error) {
      throw error;
    }
  }

  async getCurrentUser() {
    try {
      const response = await UserApi.currentUser();
      sessionStorage.setItem(this.USER_ID, response.id.toString());
      return response;
    } catch (error) {
      throw error;
    }
  }

  async onSignin(event: any, form: NgForm) {
    event.preventDefault();
    await sessionStorage.clear();
    const responseToken = await this.getToken();
    await this.getCurrentUser();
    this.baseRouter.navigate(['homepage']);
  }

}
