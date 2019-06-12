import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  
  isVisible = true;

  constructor( private route: Router){

  }

  checkVisibility(){
    if(this.route.url === '/search') {
      console.log("true")
      this.isVisible = false;
    }
    else {
      this.isVisible = true;
    }
  }
}
