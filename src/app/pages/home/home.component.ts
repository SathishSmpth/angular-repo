import {
  trigger,
  transition,
  state,
  style,
  animate,
} from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [
    trigger('divState', [
      state(
        'normal',
        style({
          'background-color': 'red',
          transform: 'translateX(0)',
        })
      ),
      state(
        'highlighted',
        style({
          'background-color': 'blue',
          transform: 'translateX(100px)',
        })
      ),
      transition('normal <=> highlighted', animate(300)),
      // transition('highlighted => normal', animate(300)),
    ]),
    trigger('wildState', [
      state(
        'normal',
        style({
          'background-color': 'red',
          transform: 'translateX(0) scale(1)',
        })
      ),
      state(
        'highlighted',
        style({
          'background-color': 'blue',
          transform: 'translateX(100px) scale(1)',
        })
      ),
      state(
        'shrunken',
        style({
          'background-color': 'green',
          transform: 'translateX(0) scale(0.5)',
        })
      ),
      transition('normal <=> highlighted', animate(300)),
      transition('shrunken <=> *', [
        style({
          'background-color': 'orange',
        }),
        animate(
          300,
          style({
            borderRadius: '50px',
          })
        ),
        animate(500),
      ]),
      // transition('highlighted => normal', animate(300)),
    ]),
    trigger('list1', [
      state(
        'in',
        style({
          opacity: 1,
          transform: 'translateX(0)',
        })
      ),
      transition('void => *', [
        style({
          opacity: 0,
          transform: 'translateX(-100px)',
        }),
        animate(300),
      ]),
      transition('* => void', [
        style({
          opacity: 0,
          transform: 'translateX(100px)',
        }),
        animate(300),
      ]),
    ]),
  ],
})
export class HomeComponent {
  state: string = 'normal';
  wildState = 'normal';
  list = ['Milk', 'Sugar', 'Bread'];

  onAnimate() {
    this.state =
      this.state == 'normal'
        ? (this.state = 'highlighted')
        : (this.state = 'normal');
    this.wildState =
      this.wildState == 'normal'
        ? (this.wildState = 'highlighted')
        : (this.wildState = 'normal');
  }
  onShrink() {
    this.wildState = 'shrunken';
  }
  onAdd(item: string) {
    this.list.push(item);
  }

  onDelete(item: string) {
    this.list.splice(this.list.indexOf(item), 1);
  }
}
