import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
 // templateUrl: './app.newcomponent.html',
// template: `<h2>tejal</h2>`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hello World';
  color = 'blue';
  show = 0;
  dt = new Date();
  obj = { foo:'bar', baz: 'qux', nested: { xyz: 3, numbers: [ 1,2,3,4,5,] } }
 // title = 'app';
}
