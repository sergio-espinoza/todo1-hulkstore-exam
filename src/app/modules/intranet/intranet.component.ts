import { Component, OnInit } from '@angular/core';
import { ThemeNameService } from 'src/app/core';

@Component({
  selector: 'app-intranet',
  templateUrl: './intranet.component.html',
  styleUrls: ['./intranet.component.scss']
})
export class IntranetComponent implements OnInit {
  public title = '';

  constructor(
    private themeNameSvc: ThemeNameService
  ) { }

  ngOnInit(): void {
  }

  public changeThemeColor(themeName: string): void {
    this.themeNameSvc.setThemeName$(themeName);
  }

  public changeTitle(title: string): void {
    this.title = ' | ' + title;
  }

}
