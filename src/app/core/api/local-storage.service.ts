import { Injectable } from "@angular/core";

type TKeyLocalstorage = 'init-prev-render';

@Injectable({ providedIn: 'root' })
export class LocalStorageService {
  public getItem(key: TKeyLocalstorage): string {
    return localStorage.getItem(key) || '';
  }
  public setItem(key: TKeyLocalstorage, value: string): void {
    localStorage.setItem(key, value);
  }
}
