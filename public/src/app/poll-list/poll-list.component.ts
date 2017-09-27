import { Component, OnInit } from '@angular/core';
import {PollService} from './../poll.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-poll-list',
  templateUrl: './poll-list.component.html',
  styleUrls: ['./poll-list.component.css']
})
export class PollListComponent implements OnInit {
  polls = [];
  user = "";
  searchterm = "";

  constructor(private _pollService : PollService,private _route: Router) {
    this._pollService.pollObserver.subscribe((polls) => {
      this.polls = polls})
    }

  ngOnInit() {
    this._pollService.getPolls();
    this.user = this._pollService.user;
  }
  logout(){
    this._pollService.logout();
  }
  delete(idx){
    this._pollService.delete(idx);
    this._route.navigateByUrl('/list')
  }

}
