import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  title = 'welcome to Elevate business solution';
  invalue : any;
  
  constructor(){
    this.title = "EBS";
    this.invalue = "";
  }
}
