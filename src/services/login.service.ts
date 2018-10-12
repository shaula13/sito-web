import AuthApi from '../app/api/AuthApi';
import {Injectable} from '@angular/core';
import {HttpParams} from '@angular/common/http';

@Injectable()
export class LoginService {

  async getAccessToken(username: string, password: string) {
    let model = new HttpParams();
    model = model.append('username', username);
    model = model.append('password', password);
    model = model.append('grant_type', 'password');
    model = model.append('client_id', 'web');
    const response = await AuthApi.loginUser(model.toString());
    const token = response.data.access_token;
    const refreshToken = response.data.refresh_token;
    const expireDate = new Date (new Date().getTime() + (1000 * response.data.expires_in));
    sessionStorage.setItem('authToken', token);
    sessionStorage.setItem('refreshToken', refreshToken);
    sessionStorage.setItem('expires', JSON.stringify(expireDate));
    return response;
  }

}
