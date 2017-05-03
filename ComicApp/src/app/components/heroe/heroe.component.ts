import { HeroesService } from './../../services/heroes.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: []
})
export class HeroeComponent implements OnInit {

  heroe:any = {};

  constructor(private activatedRoute: ActivatedRoute, private heroeService: HeroesService) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe( params =>{
      this.heroe = this.heroeService.getHeroe(params ['id']);
    });
  }

}
