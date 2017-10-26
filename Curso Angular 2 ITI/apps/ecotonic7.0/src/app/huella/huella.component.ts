import { Component, OnInit, Input } from '@angular/core';
import { HuellaUser } from '../huella-user';

@Component({
  selector: 'app-huella',
  templateUrl: './huella.component.html',
  styleUrls: ['./huella.component.css']
})
export class HuellaComponent implements OnInit {
  public _h : HuellaUser;

  @Input() set huella(value:HuellaUser) {
    this._h = value;
  } 

  constructor() { }

  ngOnInit() {

  }



}
