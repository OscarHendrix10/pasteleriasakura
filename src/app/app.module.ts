import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { MenuComponent } from './pages/menu/menu.component';
import { FormularioComponent } from './pages/formulario/formulario.component';
import { PasteleroComponent } from './pages/pastelero/pastelero.component';
import { PedidosComponent } from './pages/pedidos/pedidos.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MenuComponent,
    FormularioComponent,
    PasteleroComponent,
    PedidosComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
