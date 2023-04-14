import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
  public txtName:any;

  public onKey(event:any)
  {
    this.txtName=event.target.value;
    console.log(this.txtName);
  }

  @Output() public cToPEvent=new EventEmitter();

  public sendToParent()
  {
    this.cToPEvent.emit(this.txtName);
  }
}
