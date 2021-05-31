import { Injectable } from '@angular/core';
import { NgxIndexedDBService } from 'ngx-indexed-db';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class DatabaseService<T> {
  constructor(
    private indexedDBSvc: NgxIndexedDBService
  ) { }

  public addItem(storeName: string, item: T): Observable<T> {
    return this.indexedDBSvc.addItem(storeName, item);
  }

}

