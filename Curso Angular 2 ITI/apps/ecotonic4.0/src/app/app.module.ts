import { HuellaService } from './huella.service';
import { LoginService } from './login.service';
import { AguaService } from './agua.service';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { CalculadorasComponent } from './calculadoras/calculadoras.component';
import { AdministracionComponent } from './administracion/administracion.component';
import { MihuellaComponent } from './mihuella/mihuella.component';
import { MiaguaComponent } from './miagua/miagua.component';
import { MisgasesComponent } from './misgases/misgases.component';
import { AdminAguaComponent } from './admin.agua/admin.agua.component';
import { AdminGasesComponent } from './admin.gases/admin.gases.component';
import { AdminPaisesComponent } from './admin.paises/admin.paises.component';
import { AdminUsuariosComponent } from './admin.usuarios/admin.usuarios.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { DataTableModule, SharedModule } from 'primeng/primeng';
import { LoginComponent } from './login/login.component';
import {InputTextModule} from 'primeng/primeng';
import { FormsModule } from "@angular/forms";
import { PrivateComponent } from './private/private.component';
import { LoggedUserService } from './logged-user.service';
import { HuellaUsuariosComponent } from './huella-usuarios/huella-usuarios.component';
import { HuellaComponent } from './huella/huella.component';

@NgModule({
  declarations: [
    AppComponent,
    CalculadorasComponent,
    AdministracionComponent,
    MihuellaComponent,
    MiaguaComponent,
    MisgasesComponent,
    AdminAguaComponent,
    AdminGasesComponent,
    AdminPaisesComponent,
    AdminUsuariosComponent,
    EditUserComponent,
    LoginComponent,
    PrivateComponent,
    HuellaUsuariosComponent,
    HuellaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    InputTextModule,
    DataTableModule, 
    SharedModule,
    RouterModule.forRoot([
      { 
        path: 'login', component: LoginComponent 
          
      },
      { path: 'private', component: PrivateComponent,
          children: [
            // redirect purpose
            {
                path: '',
                pathMatch: 'full',
                redirectTo: 'calculadoras'
            },
            { path: 'calculadoras', component: MihuellaComponent },
            { path: "mi-huella", component: MihuellaComponent },
            { path: "mi-agua", component: MiaguaComponent },
            { path: "mis-gases", component: MisgasesComponent },
            { path: "admin", component: AdministracionComponent },
            { path: "admin-agua", component: AdminAguaComponent },
            { path: "admin-gas", component: AdminGasesComponent },
            { path: "admin-paises", component: AdminPaisesComponent },
            { path: "admin-users", component: AdminUsuariosComponent },
            { path: "admin-users/:userId", component: EditUserComponent}
          ]
      },
      { path: "**", redirectTo: "login" }
    ])
  ],
  providers: [
    AguaService,
    LoginService,
    LoggedUserService,
    HuellaService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
