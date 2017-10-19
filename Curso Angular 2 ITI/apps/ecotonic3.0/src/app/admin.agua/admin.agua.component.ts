import { AguaService } from '../agua.service';
import { Component, OnInit } from '@angular/core';
import { Agua } from '../agua.class';

@Component({
  selector: 'app-admin.agua',
  templateUrl: './admin.agua.component.html',
  styleUrls: ['./admin.agua.component.css']
})
export class AdminAguaComponent implements OnInit {
  agua : Agua[];
  nombre : string;
  constructor(private service : AguaService) { }

  ngOnInit() {
      this.service.getAll().subscribe(
        (data : Agua[]) => {
          this.agua = data;
        }
      );

      let nuevoObjeto : Agua = new Agua();
      nuevoObjeto.consumoEnLitros = "1000";
      nuevoObjeto.id = 7;
      nuevoObjeto.recurso = "100g de avestruz";
      nuevoObjeto.tipo = "comida";

      this.service.createAgua(nuevoObjeto).subscribe(
        (data) => {
          console.log("Objeto creado correctamente");

          this.agua.push(nuevoObjeto);
        }
      )
      
  }

}
