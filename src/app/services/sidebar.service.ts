import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  menu:any[]=[
    {titulo:'Articulos', url:'articulos', icono: 'nav-icon fa fa-cubes'},
    {titulo:'Ventas', url:'ventas', icono: 'nav-icon fas fa-th'},
  ]
}
