import { Component } from '@angular/core';

@Component({
  selector: 'app-hello-world',
  template: '<h1>Hello {{name}}!</h1>',
})
export class AppComponent {
  name = 'World';
}
