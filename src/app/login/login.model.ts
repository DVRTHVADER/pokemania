export class LoginModel {
  constructor(
    public username?: string,
    public password?: string,
    public isNewUser?: boolean,
  ) {}

  validateUser(): void {
    if (this.isNewUser) {
      console.log('Sign up form...');
    } else {
      console.log('Welcome back ' + this.username);
    }
  }
}
