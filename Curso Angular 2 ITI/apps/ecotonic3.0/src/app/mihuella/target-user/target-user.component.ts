import { Usuarios } from './../../usuarios';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-target-user',
  templateUrl: './target-user.component.html',
  styleUrls: ['./target-user.component.css']
})
export class TargetUserComponent implements OnInit {

  @Input() usuario : Usuarios;

  constructor() { }

  ngOnInit() {
    
  }

}
