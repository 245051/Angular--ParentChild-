import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'parentchildapp';
  enterName="April";
  parentData="";

  transferData(){
    this.parentData=this.enterName;
  }
  value="";
  sendData(value:string){
    this.value=value;
  }
}
