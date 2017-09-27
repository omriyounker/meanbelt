import { Component, OnInit } from '@angular/core';
import {Poll} from './../poll';
import {PollService} from './../poll.service';
@Component({
  selector: 'app-create-poll',
  templateUrl: './create-poll.component.html',
  styleUrls: ['./create-poll.component.css']
})
export class CreatePollComponent implements OnInit {
  poll:Poll;
  constructor(private _pollService : PollService) { }

  ngOnInit() {
    this.poll = new Poll();
    this.poll.answers = ["", "", "", ""];
    this.poll.answerScore = [0, 0, 0, 0];

  }
  onSubmit(){
    console.log(this.poll);
    this.poll.createBy = this._pollService.user;
    this.poll.created = new Date();
    this._pollService.addPoll(this.poll);
  }

}
