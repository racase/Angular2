import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {
  private _userId : String = "";

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe((param) => {
      this._userId = ""+param["userId"];
    })
  }

  get userId() : String {
    return this._userId;
  }

}
