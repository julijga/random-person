import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs/observable';
import {catchError, tap} from 'rxjs/operators';

@Injectable()
export class RobotNameService {
  name = '';
  constructor(private http: HttpClient) { }
  url = 'http://uinames.com/api/?amount=1';
  getName() {
    return this.http.get(this.url)
      .pipe(
      tap (
        (res: any) => {
        return `${res.name} ${res.surname}`;
      } )
    );
  }
}
