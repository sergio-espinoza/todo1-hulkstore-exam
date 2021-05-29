import { Component, EventEmitter, Output } from '@angular/core';
import { ThemeNameService } from 'src/app/core';
import { IThemeItem } from 'src/app/models';

@Component({
  selector: 'app-nav-config',
  templateUrl: './nav-config.component.html',
  styleUrls: ['./nav-config.component.scss']
})
export class NavConfigComponent {
  @Output() themeColorChange = new EventEmitter<string>();

  public themeColorButtons: IThemeItem[] = [
    { themeName: 'unicorn-light-theme', color: '#ffd740', backgroundColor: '#ffffff' },
    { themeName: 'unicorn-dark-theme', color: '#ffd740', backgroundColor: '#262626' },
    { themeName: 'candy-light-theme', color: '#ff4081', backgroundColor: '#ffffff' },
    { themeName: 'candy-dark-theme', color: '#ff4081', backgroundColor: '#262626' },
    { themeName: 'light-theme', color: '#aa00ff', backgroundColor: '#ffffff' },
    { themeName: 'dark-theme', color: '#aa00ff', backgroundColor: '#262626' },
  ];

  constructor(
    private themeNameSvc: ThemeNameService
  ) { }

  public changeThemeColor(themeName: string): void {
    this.themeNameSvc.setThemeName$(themeName);
    this.themeColorChange.emit(themeName);
  }

}
