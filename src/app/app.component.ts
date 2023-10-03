import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  //styleUrls: ['./app.component.css']
  styles: [`
    h3{
      color: pink
    }
  `]
})
export class AppComponent {
  title = 'my-first-app with Angular';
  name = 'Niyas';
}

