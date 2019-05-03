import { Component, OnInit } from '@angular/core';
import { MenuService } from '../shared/service/menu.service';
import { Observable } from 'rxjs';
import { Menu } from '../shared/entity/menu';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  menus: Observable<Array<Menu>>;

  constructor(private menuService: MenuService) { }

  ngOnInit() {
    this.menus = this.menuService.getMenus();
  }

}
