import {  Input } from '@angular/core';
import { Component,  OnInit,VERSION } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DatePipe } from '@angular/common';

@Component({
 selector: 'api',
  templateUrl: './api.component.html'
})
export class APIComponent implements OnInit {

showFiller = false;
panelOpenState = false;
covid = null;
covid_1 = null;
  constructor(public http:HttpClient,private datePipe: DatePipe){

}

ngOnInit(){

}
 
}
