import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-adm-usuarios',
  templateUrl: './adm-usuarios.component.html',
  styleUrls: ['./adm-usuarios.component.css']
})
export class AdmUsuariosComponent implements OnInit { 

  private sub: any;
  private mensaje: string;
  id: number;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['idUser']; // (+) converts string 'id' to a number

      // In a real app: dispatch action to load the details here.
      this.mensaje = "El usuario seleccionado tiene el id: " + this.id; 
   });

  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
