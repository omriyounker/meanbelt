import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Http } from '@angular/http';
import {Observable, BehaviorSubject} from 'rxjs';
import {Poll} from './poll';
@Injectable()
export class PollService {
  user = "";
  polls = [];
  pollObserver = new BehaviorSubject(this.polls);
  constructor(private _route: Router,private _http: Http) { }
  logUser(name){
    this.user = name;
    this._route.navigateByUrl('list');
  }
  logout(){
    this.user = "";
    this._route.navigateByUrl('');
  }
  getUser(){
    return this.user;
  }
  addPoll(inPoll){
    this.polls.push(inPoll);
    this._http.post('/create', inPoll).subscribe((response)=>{
      this.polls = response.json();
      console.log(this.polls);
      this.pollObserver.next(this.polls);
      this._route.navigateByUrl('list');
    })
  }
  getPolls(){
    this._http.get('/getpolls').subscribe((response)=>{
      this.polls = response.json();
      console.log(this.polls);
      this.pollObserver.next(this.polls);
    })
  }
  updatePoll(poll){
    this._http.post('/update', poll).subscribe((response)=>{

      this.polls = response.json();
      console.log(this.polls);
      this.pollObserver.next(this.polls);
    })
  }
  delete(idx){
    var pollout = this.polls[idx];
    this._http.delete('/delete/'+ pollout._id).subscribe((response)=>{

      this.polls = response.json();
      console.log(this.polls);
      this.pollObserver.next(this.polls);
    })
  }


}
