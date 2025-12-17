import { Component } from '@angular/core';
import { About } from '../about/about';
import { Login } from '../login/login';
import { profile } from 'console';
import { Profile } from '../profile/profile';

@Component({
  selector: 'app-home',
  imports: [About, Profile],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  myname = 'Vaibhav';
  stringType:string="This will take only string value";
  intType:number=123; //This data type will take only integer value;
  anyValue:any="hello world"; //This data type will take any value;
  StringInt:string|number="Hey"; //This data type will take only string and integer value;

  HandleClick() {
    alert("Button clicked sucessfully");
    this.NewFunction(10, 30);

    this.stringType = "Hello"; //Can not assign other value except string
    this.intType = 456; //Can not assign other value except numeric
    this.anyValue = 789; //Can take any value as it's data type is any
    this.StringInt = 567; //Can take string and integer value;
    this.StringInt = "Hey";
  }

  NewFunction(a:number, b:number) {
    console.log("New function also called along with old function");

    let x:number = 234;
    console.log(x);
    console.log("Addition of two variable passed as params is: ", a + b);
  }

  // for counter app code
  count:number = 0;
  limit:boolean = true;

  handleIncrement() {
    this.count = this.count+1;
  }

  handleDecrement() {
    this.count = this.count-1;
    if(this.count == 0) {
      this.limit = true
    }
  }

  handleReset() {
    this.count = 0;
    this.limit = true;
  }

  handleCounter(val:string){
    if(val=='minus') {
      this.count = this.count-1;
      if(this.count == 0) {
        this.limit = true;
      }
    } else if(val=='plus') {
      this.limit = false;
      this.count = this.count+1;
    } else {
      this.count = 0;
      this.limit = true;
    }
  }

  // for event 
  handleEvent(event:Event) {
    console.log(event.type, "event triggered successfully!");
    // console.log("Clicked type event triggered successfully!", event.target);
    // console.log("Clicked target event triggered successfully!", (event.target as Element).className);
    console.log("value", (event.target as HTMLInputElement).value);
  }
}
