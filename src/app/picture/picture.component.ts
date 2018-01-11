import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-picture',
  templateUrl: './picture.component.html',
  styleUrls: ['./picture.component.css']
})
export class PictureComponent implements OnInit {
  baseUrl = 'https://robohash.org/';
  random = Math.floor(Math.random() * (50000 + 1));
  url = this.baseUrl + this.random + '/';
  generate = function () {
    this.url = this.baseUrl + Math.floor(Math.random() * (50000 + 1)) + '/';
    console.log(this.url);
  };
  constructor() { }

  ngOnInit() {
  }

}
