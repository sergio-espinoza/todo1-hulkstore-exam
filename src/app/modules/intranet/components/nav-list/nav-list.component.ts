import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ILinkItem, IUser } from 'src/app/models';

@Component({
  selector: 'app-nav-list',
  templateUrl: './nav-list.component.html',
  styleUrls: ['./nav-list.component.scss']
})

export class NavListComponent {
  @Input() public user: IUser = {
    username: '',
    password: ''
  };

  @Output() navigate = new EventEmitter<string>();

  public links: ILinkItem[] = [

    { label: 'Categories', icon: 'category', url: 'category' },
    { label: 'Products', icon: 'inventory_2', url: 'product' },
    { label: 'Purchases', icon: 'inventory', url: 'purchase' },
    { label: 'Sales', icon: 'point_of_sale', url: 'sale' },
    { label: 'Measurements', icon: 'analytics', url: 'measurement' },
  ];

  public onNavigate(title: string): void {
    this.navigate.emit(title);
  }

  constructor() { }
}
