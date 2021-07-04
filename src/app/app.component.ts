import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LocalStorageService } from './core/api/local-storage.service';
import { DatabaseService } from './core/database';
import { slideInAnimation } from './config';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    slideInAnimation
  ]
})
export class AppComponent implements OnInit {
  public title = 'hulkStore';

  constructor(
    private databaseSvc: DatabaseService<any>,
    private localStorageSvc: LocalStorageService,
  ) { }

  ngOnInit(): void {
    this.initObjectStores();
  }

  private initObjectStores(): void {
    if (this.localStorageSvc.getItem('init-prev-render')) {
      console.log('app is not new');
      return;
    }
    console.log('app is new');
    this.databaseSvc.ensureInitObjectStores();
    this.localStorageSvc.setItem('init-prev-render', 'pre-render-initialized');
  }

  public prepareRoute(outlet: RouterOutlet): any {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData.animation;
  }
}
