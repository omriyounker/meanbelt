import { Component, OnInit } from '@angular/core';
import {PollService} from './../poll.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-poll',
  templateUrl: './poll.component.html',
  styleUrls: ['./poll.component.css']
})
export class PollComponent implements OnInit {
  polls = [];
  idx = 0;
  constructor(private _pollService : PollService, private _route: ActivatedRoute,) {
    this._route.paramMap.subscribe(params=>{
      this.idx = parseInt(params.get('idx'), 10);
    })
    this._pollService.pollObserver.subscribe((polls) => {
      this.polls = polls})
    }

  ngOnInit() {
    this.polls[this.idx].answerScore[0] = this.polls[this.idx].answerS1;
    this.polls[this.idx].answerScore[1] = this.polls[this.idx].answerS2;
    this.polls[this.idx].answerScore[2] = this.polls[this.idx].answerS3;
    this.polls[this.idx].answerScore[3] = this.polls[this.idx].answerS4;
  }
  addVote(num){
    this.polls[this.idx].answerScore[num] += 1;
    this._pollService.updatePoll(this.polls[this.idx]);

  }

}
