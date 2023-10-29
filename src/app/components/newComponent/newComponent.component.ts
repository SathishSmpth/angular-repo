import { Component } from '@angular/core';

// @Component({
//   selector: 'app-new-component',
//   template: '<h1 class="heading">This is New component</h1>',
//   styles: ['.heading{ color:red}'],
// })
@Component({
  selector: 'app-new-component',
  templateUrl: './newComponent.component.html',
  styleUrls: ['./newComponent.component.css'],
})
export class NewComponent {
  title = 'This is string Interpolation';
  propertyBinding = 'This is property Interpolation';
  btnState = false;
  classes!: string;
  btnStyle!: string;
  inputValue =""

  number  = 5

  names = ["Sathish","Sasikumar","Sundar","Sai"]
  constructor() {
    setInterval(() => {
      this.btnState = !this.btnState;

      this.classes = this.btnState ? 'disabled' : 'enabled';
      this.btnStyle = this.btnState ? '2px solid grey' : '2px solid magenta';
    }, 2000);
  }

  getInputValue(event:Event){
    this.inputValue = (<HTMLInputElement>event.target).value
  }
}
