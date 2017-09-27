import { Component, OnInit } from '@angular/core';
import {PollService} from './../poll.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  name:string;
  constructor(private _pollService : PollService) { }

  ngOnInit() {
  }
  onSubmit(){
    this._pollService.logUser(this.name);
    this.name = "";
  }

}
