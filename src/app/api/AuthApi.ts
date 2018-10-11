import axios from 'axios';
import { authUrl, getHeaders, loginHeaders } from './urls';
import { authUrlDev } from './servers';
export default class AuthApi {
  static async loginUser(userLoginModel: any): Promise<any> {
    const endpoint = authUrlDev + authUrl;
    const body = userLoginModel.toString();
    const response = await axios.post(endpoint, body, {headers: loginHeaders});
    return response;
  }
}
