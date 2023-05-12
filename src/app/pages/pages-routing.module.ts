import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages.component';
import { ArticulosComponent } from './articulos/articulos.component';
import { VentasComponent } from './ventas/ventas.component';
import { HomeComponent } from './home/home.component';

const routes:Routes = [
  {path:'home', component:PagesComponent,
    children:[
      {path:'', component:HomeComponent, data:{titulo:'Home'}},
      {path:'articulos', component:ArticulosComponent, data:{titulo: 'Articulos'}},
      {path:'ventas',component:VentasComponent, data:{titulo: 'Ventas'}}
    ]}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports:[RouterModule]
})
export class PagesRoutingModule { }
