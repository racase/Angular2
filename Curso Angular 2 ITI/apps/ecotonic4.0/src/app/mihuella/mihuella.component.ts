import { HuellaUser } from '../huella-user';
import { HuellaService } from '../huella.service';
import { AfterViewChecked, AfterViewInit, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-mihuella',
  templateUrl: './mihuella.component.html',
  styleUrls: ['./mihuella.component.css']
})
export class MihuellaComponent implements OnInit {
  public huellasDeWS : HuellaUser[];

  constructor(private huellaService : HuellaService) { 
    this.loadHuellas();
  }

  public ngOnInit() {    
    this.loadHuellas();
  }

  private loadHuellas() {
    this.huellaService.obtenerArray().subscribe(
      (res) => {
        console.log(res);
        this.huellasDeWS = res;
      }
    );
  }

}
