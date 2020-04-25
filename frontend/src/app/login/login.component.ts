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
    /*
    this.authService
      .login(submittedForm.value.email, submittedForm.value.password)
      .subscribe(
        (authStatus) => {
          if (authStatus.isAuthenticathed) {
            this.router.navigate([
              this.redirectUrl || `/customer/${authStatus.user.customer.id}`,
            ]);
            this.uiService.showToast('Welcome User');
          }
        },
        (error) => (this.loginError = error)
      );
      */
  }
}
