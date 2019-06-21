import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-material';
  model:any={};

  clickme(){
  console.log("SUBMIT==>",this.model);
}
}
