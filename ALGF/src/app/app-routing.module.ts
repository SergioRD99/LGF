import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductosComponent } from './home/productos/productos.component';
import { ContactoComponent } from './home/contacto/contacto.component';

const routes: Routes = [
  {path:'home',children:[
    {path: 'productos',component:ProductosComponent},
    {path: 'contacto',component:ContactoComponent}
  ]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
