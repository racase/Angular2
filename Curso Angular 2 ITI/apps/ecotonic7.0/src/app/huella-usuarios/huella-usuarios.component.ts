import { BehaviorSubject } from 'rxjs/Rx';
import { SimpleChange } from '@angular/core/src/change_detection/change_detection_util';
import { HuellaService } from '../huella.service';
import { HuellaUser } from '../huella-user';
import { AfterViewChecked, AfterViewInit, Component, Input, OnChanges, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-huella-usuarios',
  templateUrl: './huella-usuarios.component.html',
  styleUrls: ['./huella-usuarios.component.css']
})
export class HuellaUsuariosComponent implements OnInit, OnChanges {
  _huellas : HuellaUser[];

  private _data = new BehaviorSubject<HuellaUser[]>([]);

  private asyncData : HuellaUser[];

  constructor(private huellaService : HuellaService) { }

  ngOnInit() {
    this._data
        // Esta línea deja al componente a la escucha de _data
        // mientras this._huellas sea undefined o nulo
        // Y se desuscribe automáticamente una vez tiene valor
        .takeWhile(() => !this._huellas)
        .subscribe(x => {
            this._huellas = x;
        });
  }    

  ngOnChanges(changes){
      if(changes["huellas"] && this.huellas) {
        this._huellas = (changes["huellas"] as SimpleChange)
          .currentValue;
      }
  } 
  
  @Input() huellas;
  
  @Input() set huellacas(value) {
    this._data.next(value);
  }

  get huellacas() {
    // Obtiene el último valor de _data
    return this._data.getValue();
  }

}
