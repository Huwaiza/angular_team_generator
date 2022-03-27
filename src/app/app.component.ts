import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  newMember = "";
  members: string[] = [];

  addMember() {
     this.members.push(this.newMember) 
  }

  onInput(member: string){
    this.newMember = member
  }
}
