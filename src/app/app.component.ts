import { Component,  OnInit,VERSION } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DatePipe } from '@angular/common';
import { Routes } from '@angular/router';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit  {
  name = 'Angular ' + VERSION.major;
  showFiller = false;
panelOpenState = false;
covid = null;
covid_1 = null;
key = null;
total_covid_1 = null;
ddata = null;
constructor(public http:HttpClient,private datePipe: DatePipe){

}

ngOnInit(){
  
}
onGoToPage2() { 
  window.location.href='http://www.cnn.com/'; //use the external url here    
 }

currentDate = new Date();
testdata = this.datePipe.transform(this.currentDate , 'yyyy-MM-dd')

}
