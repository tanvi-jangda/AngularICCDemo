import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Assignment8';

  //message to be sent to child component
  public messageToChild="Hello from Parent";

  //empty property to receive the data from child component
  public messageFromChild="";
}
