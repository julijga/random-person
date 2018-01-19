import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { PictureComponent } from './picture/picture.component';
import { HttpClientModule } from '@angular/common/http';
import {RobotNameService} from './robot-name.service';


@NgModule({
  declarations: [
    AppComponent,
    PictureComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [RobotNameService],
  bootstrap: [AppComponent]
})
export class AppModule { }
