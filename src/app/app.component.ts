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
    console.log(this.newMember)
     this.members.push(this.newMember) 
     console.log(this.members)
  }

  onInput(member: string){
    this.newMember = member
  }
}
