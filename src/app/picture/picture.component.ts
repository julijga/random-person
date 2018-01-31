import {Component, OnInit} from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { RobotNameService } from '../robot-name.service';
declare const triangulate: any;

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
  image = new Image();
  svgImage:SafeHtml = '';
  constructor(private robotNameService: RobotNameService, private sanitizer: DomSanitizer) {}
  ngOnInit() {
    this.image.crossOrigin = 'Anonymous';
    this.generate();
  }

  generate() {
    this.url = this.baseUrl + Math.floor(Math.random() * (50000 + 1)) + '/?size=450x450';
    this.image.src = this.url;
    this.robotNameService.getName().subscribe(
      res => {
        this.name = `${res.name} ${res.surname}`;
        console.log(`Robot name is ${this.name}`);
      },
      err => console.error(err)
    );
    let params = { blur: 110, vertexCount: 700 };
    this.image.onload = () => {
      triangulate(params)
        .fromImage(this.image)
        .toSVG()
        .then( svgMarkup => {
          this.svgImage = this.sanitizer.bypassSecurityTrustHtml(svgMarkup);
        });
    };
  }
}
