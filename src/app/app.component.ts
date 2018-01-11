import { Component } from '@angular/core';
import { PictureComponent } from './picture/picture.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  generate = function () {
    new PictureComponent().generate();
  };
}
