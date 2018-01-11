import {Component} from '@angular/core';

@Component({
  selector: 'app-picture',
  templateUrl: './picture.component.html',
  styleUrls: ['./picture.component.css']
})
export class PictureComponent {
  title = 'Random Robot';
  baseUrl = 'https://robohash.org/';
  random = Math.floor(Math.random() * (50000 + 1));
  url = this.baseUrl + this.random + '/' + '?size=450x450';

  generate() {
    this.url = this.baseUrl + Math.floor(Math.random() * (50000 + 1)) + '/?size=450x450';
  }
}
