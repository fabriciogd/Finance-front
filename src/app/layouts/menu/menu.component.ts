import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  items: any[];

  constructor() { }

  ngOnInit() {
    this.items = [{title: 'Despesas', link: "/despesas/listar"}];
  }

}
