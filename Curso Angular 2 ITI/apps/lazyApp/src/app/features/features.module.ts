import { PrivateModule } from './private/private.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrivateComponent } from './private/private.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    PrivateModule,
    RouterModule.forRoot([
      { 
        path: 'private', component: PrivateComponent        
      },
      { path: "**", redirectTo: '' }
    ]) 
  ],
  declarations: [ PrivateComponent]
})
export class FeaturesModule { }
