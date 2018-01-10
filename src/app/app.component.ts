import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  baseUrl = 'https://robohash.org/';
  random = Math.floor(Math.random() * (50000 + 1));
  url = this.baseUrl + this.random + '/';
  generate = function () {
    this.url = this.baseUrl + Math.floor(Math.random() * (50000 + 1)) + '/';
  };
}
