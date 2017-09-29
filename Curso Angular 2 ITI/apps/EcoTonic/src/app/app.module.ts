import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router'

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { NavabarComponent } from './navabar/navabar.component';
import { MainComponent } from './main/main.component';
import { CalculadoraComponent } from './components/calculadora/calculadora.component';
import { MiHuellaComponent } from './components/mi-huella/mi-huella.component';
import { ConsumoAguaComponent } from './components/consumo-agua/consumo-agua.component';
import { GasesComponent } from './components/gases/gases.component';
import { AdministracionComponent } from './components/administracion/administracion.component';
import { AdmAguaComponent } from './components/adm-agua/adm-agua.component';
import { AdmGasesComponent } from './components/adm-gases/adm-gases.component';
import { AdmPaisesComponent } from './components/adm-paises/adm-paises.component';
import { AdmUsuariosComponent } from './components/adm-usuarios/adm-usuarios.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    NavabarComponent,
    MainComponent,
    CalculadoraComponent,
    MiHuellaComponent,
    ConsumoAguaComponent,
    GasesComponent,
    AdministracionComponent,
    AdmAguaComponent,
    AdmGasesComponent,
    AdmPaisesComponent,
    AdmUsuariosComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: "calculadora", component: MiHuellaComponent},
      { path: "miHuella", component: MiHuellaComponent},
      { path: "consumoAgua", component: ConsumoAguaComponent},
      { path: "gases", component: GasesComponent},
      { path: "administracion", component: AdministracionComponent},
      { path: "admAgua", component: AdmAguaComponent},
      { path: "admGases", component: AdmGasesComponent},
      { path: "admPaises", component: AdmPaisesComponent},
      { path: "admUsuarios", component: AdmUsuariosComponent},
      { path: "**", redirectTo:"calculadora"}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
