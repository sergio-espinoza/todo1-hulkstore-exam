import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IUser } from 'src/app/models';
import { DatabaseService } from './database.service';

@Injectable()
export class UserDatabaseService {
  constructor(
    private databaseSvc: DatabaseService<IUser>
  ) { }

  public signUp(user: IUser): Observable<IUser> {
    const key = 'user-' + Date.now();
    return this.databaseSvc.addItem('user', { _id: key, ...user });
  }

}
