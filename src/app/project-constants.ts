export class ProjectConstants {

  PROJECT_VERSION = '1.0';
  PROJECT_NAME    = 'PROJECT-NAME ' + this.PROJECT_VERSION;

  USER_ID = 'userId';

  emailPattern: RegExp    = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{1,66})\.([a-z]{2,10}(?:\.[a-z]{2})?)$/i;
  numberPattern: RegExp   = /^[0-9]{1,11}$/;
  passwordPattern: RegExp = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@!%*#?^.&~`()_+|{}:<>])[A-Za-z\d$@!%*#?^.&~`()_+|{}:<>]{8,}$/;
  phonePattern: RegExp    = /^[0-9]{0,}$/;

}
