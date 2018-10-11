export class UserLoginModel {
  username: string;
  password: string;
  grant_type: string;
  client_id: string;
  client_secret: string;
}
export class UserModel {
  id: number;
  username: string;
  password: string;
  active: boolean;
}
export class CurrentUserModel {
  id: number;
  username: string;
}
