import { ListadoServiceService } from './listado-service.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaComponent } from './lista/lista.component';
import { VisorComponent } from './visor/visor.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ListaComponent, VisorComponent],
  providers: [ListadoServiceService]
})
export class ListadoSeriesModule { }
