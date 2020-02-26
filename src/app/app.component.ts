import { Component } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'test';

  tasks: Task[] = [];

  selectedDeadLine: DeadLine = new DeadLine(0, 'My Timeline', null);
  DeadLines = [
    new DeadLine(0, 'My Timeline', null),
    new DeadLine(1, '28/02/2020', new Task("Angular Tutorial, Create Angular project, Resolve(understanding of NPM repository(global, coba => nexux)), CLI (host, test, debug, watch, publish)")),
    new DeadLine(2, '06/03/2020', new Task("Access rights to MAVIS, TFS, SharePoint, MailBoxers, Offers, Introduction to MAVIS(WS, API, WEB Smart), Intallation of Workstation" )),
    new DeadLine(3, '14/03/2020', new Task("Tasks for this date has not planned yet"))
  ];

  text1: string = "default text";

  constructor() {
    this.tasks.push(new Task("Please select the item from My Timeline,"));
  }

  onSelect(DeadLineId) {
    //this.tasks = [];
    this.selectedDeadLine = null;
    for (var i = 0; i < this.DeadLines.length; i++) {
      if (this.DeadLines[i].id == DeadLineId) {
        this.selectedDeadLine = this.DeadLines[i];
       // this.tasks = (this.DeadLines[i].tasks).slice();
       this.constructor();
      }
    }
  }
}

export class Task {
  constructor(tasks: string) {
    this.tasks = tasks.split(",");
  }
  tasks: string[] = [];
}

export class DeadLine {
  constructor(public id: number, public name: string, public tasks: Task) { }
}
