import { NgModule } from '@angular/core';

import { AuthRoutingModule } from './auth-routing.module';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { AuthComponent } from './auth.component';
import { UserDatabaseService } from 'src/app/core/database';
import { SignupService } from './auth-service';


@NgModule({
  declarations: [
    SigninComponent,
    SignupComponent,
    AuthComponent
  ],
  imports: [
    SharedModule,
    AuthRoutingModule
  ],
  providers: [
    UserDatabaseService,
    SignupService
  ]
})
export class AuthModule { }
