import axios from 'axios';
import { getHeaders } from './urls';
import { CurrentUserModel } from '../../models/UserModel';
import { authUrlDev } from './servers';
export default class UserApi {
  static async currentUser(): Promise<CurrentUserModel> {
    const endpoint = authUrlDev + 'current';
    const response = await axios.get<CurrentUserModel>(endpoint, { data: {}, headers: getHeaders()});
    return response.data;
  }
}
