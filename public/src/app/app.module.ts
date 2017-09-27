import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- Import FormsModule
import { HttpModule } from '@angular/http'; // <-- Import HttpModule
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { PollComponent } from './poll/poll.component';
import {PollService} from './poll.service';
import { PollListComponent } from './poll-list/poll-list.component';
import { CreatePollComponent } from './create-poll/create-poll.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PollComponent,
    PollListComponent,
    CreatePollComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule
  ],
  providers: [PollService],
  bootstrap: [AppComponent]
})
export class AppModule { }
