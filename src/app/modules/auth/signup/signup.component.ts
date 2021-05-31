import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators as vl } from '@angular/forms';
import { Router } from '@angular/router';
import { ƒMatchedValidator } from 'src/app/config';
import { UserDatabaseService } from 'src/app/core/database';
import { IPasswordField } from 'src/app/models';
import { SignupService } from '../auth-service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit, OnDestroy {
  public signupForm = new FormGroup({
    username: new FormControl('', [vl.required, vl.minLength(8), vl.maxLength(11)]),
    password: new FormControl('', [vl.required, vl.minLength(6), vl.maxLength(30)]),
    confirmPassword: new FormControl('', [vl.required, vl.minLength(6), vl.maxLength(30)]),
  }, {
    validators: [ƒMatchedValidator('password', 'confirmPassword')]
  });

  public passwordConfig: IPasswordField[] = [
    { icon: 'visibility', type: 'password' },
    { icon: 'visibility_off', type: 'text' }
  ];
  public selectedPasswordConfig: 0 | 1 = 0;

  constructor(
    private userDatabaseSvc: UserDatabaseService,
    private signupSvc: SignupService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.updateSignupForm();
  }

  private updateSignupForm(): void {
    this.signupForm.patchValue(this.signupSvc.getSignupData());
  }

  public alternatePasswordConfig(): void {
    this.selectedPasswordConfig = this.selectedPasswordConfig === 0 ? 1 : 0;
  }

  public signup(): void {
    if (this.signupForm.invalid) {
      return;
    }
    const { username, password } = this.signupForm.value;
    this.userDatabaseSvc.signUp({ username, password }).subscribe(
      signupData => {
        this.router.navigate(['/intranet']);
      }
    );
  }

  ngOnDestroy(): void {
    this.signupSvc.setSignupData(this.signupForm.value);
  }


}
