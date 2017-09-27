import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {PollListComponent} from './poll-list/poll-list.component';
import {PollComponent} from './poll/poll.component';
import {CreatePollComponent} from './create-poll/create-poll.component';
const routes: Routes = [
  {
    path:'',
    component: LoginComponent,
    pathMatch: 'full'
  },
  {
    path:'list',
    component: PollListComponent,
    pathMatch: 'full'
  },
  {
    path:'addpoll',
    component: CreatePollComponent,
    pathMatch: 'full'
  },
  {
    path:'poll/:idx',
    component: PollComponent,
    pathMatch: 'full'
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
