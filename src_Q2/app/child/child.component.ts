import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {

  //empty property to recieve the data from parent component with input decorator
  @Input() public messageFromParent="";
  
  //property to assign value to be sent to parent component using output decorator
  @Output() public iCCEvent=new EventEmitter();

  public sendMessageToParent()
  {
    this.iCCEvent.emit("Hello from child");
  }
}
