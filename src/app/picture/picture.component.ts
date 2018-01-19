import {Component, OnInit} from '@angular/core';
import { RobotNameService } from '../robot-name.service';

@Component({
  selector: 'app-picture',
  templateUrl: './picture.component.html',
  styleUrls: ['./picture.component.css']
})
export class PictureComponent implements OnInit{
  name: any = '';
  title = 'Random Robot';
  baseUrl = 'https://robohash.org/';
  random = Math.floor(Math.random() * (50000 + 1));
  url = this.baseUrl + this.random + '/' + '?size=450x450';

  constructor(private robotNameService: RobotNameService) {}
  ngOnInit() {
    this.robotNameService.getName().subscribe(
      res => {
        this.name = `${res.name} ${res.surname}`;
        console.log(`Robot name is ${this.name}`);
      },
      err => console.error(err)
    );
    // this.name = this.robotNameService.getName();
  }

  generate() {
    this.url = this.baseUrl + Math.floor(Math.random() * (50000 + 1)) + '/?size=450x450';
    this.robotNameService.getName().subscribe(
      res => {
        this.name = `${res.name} ${res.surname}`;
        console.log(`Robot name is ${this.name}`);
      },
      err => console.error(err)
    );
  }
}
