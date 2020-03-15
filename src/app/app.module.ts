import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {TestChartComponent} from './chart/chart.component'


import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent,
    TestChartComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
