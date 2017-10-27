import { LoginComponent } from './features/private/login/login.component';
import { FeaturesModule } from './features/features.module';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    CoreModule,
    FeaturesModule,
    RouterModule.forRoot([
      { 
        path: 'login', component: LoginComponent        
      },
      {
        path: 'private', loadChildren: './features/#FeaturesModule'
      },
      { path: "**", redirectTo: 'login' }
    ]) 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
