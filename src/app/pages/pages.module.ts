import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesComponent } from './pages.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { ArticulosComponent } from './articulos/articulos.component';
import { VentasComponent } from './ventas/ventas.component';
import { HomeComponent } from './home/home.component';
import {MatFormFieldModule} from '@angular/material/form-field';

const material = [
  MatFormFieldModule
];


@NgModule({
  declarations: [
    ArticulosComponent,
    VentasComponent,
    PagesComponent,
    HomeComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    material
  ],
  exports: [
    ArticulosComponent,
    VentasComponent,
    HomeComponent,
    material
  ]
})
export class PagesModule { }
