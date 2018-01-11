import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Injectable()
export class RobotNameServiceService {
  name = '';
  constructor(private http: HttpClient) { }
  url = 'http://uinames.com/api/?amount=1';
  getName() {
    this.http.get(this.url).subscribe(data) => {
      this.name = data.name + data.surname;
      return this.name;
    }
  }
}
