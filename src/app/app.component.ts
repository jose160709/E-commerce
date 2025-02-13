import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  menuItems = [
    { title: 'Dashboard', icon: 'home-outline', link: '/dashboard' },
    { title: 'Productos', icon: 'shopping-cart-outline', link: '/productos' },
    { title: 'Pedidos', icon: 'archive-outline', link: '/pedidos' },
    { title: 'Usuarios', icon: 'people-outline', link: '/usuarios' }
  ];
}
