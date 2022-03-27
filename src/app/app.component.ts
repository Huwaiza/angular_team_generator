import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  newMemberName = "";
  members: string[] = [];
  errorMessage = ""
  numberOfTeams: number | "" = ""
  teams: string[][] = []
  addMember() {

    if(!this.newMemberName){
      this.errorMessage = "Name cannot be empty!"
      return;
    }
    this.errorMessage = ""
    this.members.push(this.newMemberName) 
    this.newMemberName = ""
  }

  onInput(member: string){
    this.newMemberName = member
  }

  onNumberTeamInput(teamNumber: String) {
    this.numberOfTeams = Number(teamNumber)
  }

  generateTeams(){
    if(!this.numberOfTeams  || this.numberOfTeams <= 0){
      this.errorMessage = "Please enter postive digit for number of teams"
      return;
    }
    const allMembers = [...this.members]
    this.errorMessage  = ""

    while(allMembers.length){
      for (let i = 0; i < this.numberOfTeams; i++){
        const randomIndex = Math.floor(Math.random() * allMembers.length)
        const member = allMembers.splice(randomIndex, 1)[0]
        
        if (!member)break;
        if (this.teams[i]){
          this.teams[i].push(member)
        }else{
          this.teams[i] = [member]
        }
      }
    }
    console.log(this.teams)
  }
}
