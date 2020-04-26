import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { EmailValidation, PasswordValidation } from '../common/validations';
import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  loginError = '';
  redirectUrl;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.buildLoginForm();
  }

  buildLoginForm() {
    this.loginForm = this.formBuilder.group({
      email: ['', EmailValidation],
      password: ['', PasswordValidation],
    });
  }

  async login(submittedForm: FormGroup) {
    this.router.navigateByUrl('/home');
    this.authService
      .login(submittedForm.value.email, submittedForm.value.password)
      .subscribe(
        (authStatus) => {
          if (authStatus.isAuthenticathed) {
            this.router.navigate([this.redirectUrl || `/home/welcome`]);
            // this.uiService.showToast('Welcome User');
          }
        },
        (error) => (this.loginError = error)
      );
  }

  get isFormInvalid() {
    return this.loginForm.invalid;
  }

  get isEmailRequired() {
    return (
      this.loginForm.get('email').hasError('required') &&
      this.loginForm.get('email').dirty &&
      this.loginForm.get('email').touched
    );
  }

  get isEmailInvalid() {
    return (
      this.loginForm.get('email').hasError('email') &&
      this.loginForm.get('email').dirty &&
      this.loginForm.get('email').touched
    );
  }

  get isPasswordRequired() {
    return (
      this.loginForm.get('password').hasError('required') &&
      this.loginForm.get('password').dirty &&
      this.loginForm.get('password').touched
    );
  }

  get isPasswordMinlegth() {
    return (
      this.loginForm.get('password').hasError('minlength') &&
      this.loginForm.get('password').dirty &&
      this.loginForm.get('password').touched
    );
  }

  get isPasswordMaxlegth() {
    return (
      this.loginForm.get('password').hasError('maxlength') &&
      this.loginForm.get('password').dirty &&
      this.loginForm.get('password').touched
    );
  }
}
