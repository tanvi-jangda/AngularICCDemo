import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Assignment8';

  public txtLength:any;
  public onKey(event:any)
  {
  this.txtLength=event.target.value.length;
  }
}
