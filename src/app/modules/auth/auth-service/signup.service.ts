import { Injectable } from '@angular/core';
import { BSignupData } from 'src/app/blueprints';

@Injectable()
export class SignupService {
  private signupData = { ...new BSignupData('', '', '') };

  constructor() { }

  public getSignupData(): BSignupData {
    return this.signupData;
  }
  public setSignupData(externalSignupData: BSignupData): void {
    this.signupData = { ...this.signupData, ...externalSignupData };
  }

  public arePasswordsTheSame(password: string, confirmPassword: string): boolean {
    return password === confirmPassword;
  }
}
