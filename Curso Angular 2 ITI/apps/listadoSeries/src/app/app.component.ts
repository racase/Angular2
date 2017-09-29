import { ListadoService } from './listado-service.service';
import { Serie } from './serie.class';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ListadoService]
})
export class AppComponent {
  
  _listaSeries: Serie [];
  _nameSelected: string;
  _overViewSelected: string;
  
  constructor(private _service: ListadoService) {
    
  }

  ngOnInit(){
    this._listaSeries  = this._service.getSeries();
  }


  showSerie(serie: Serie) {
    this._nameSelected = serie.original_name;
    this._overViewSelected = serie.overview;
  }
  
}
