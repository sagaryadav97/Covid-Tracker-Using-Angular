import {  Input } from '@angular/core';
import { Component,  OnInit,VERSION } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'hello',
  template: `<h1>Hello {{covid_1}}!</h1>`,
  styles: [`h1 { font-family: Lato; }`]
})
export class HelloComponent implements OnInit {

showFiller = false;
panelOpenState = false;
covid = null;
covid_1 = null;
  constructor(public http:HttpClient,private datePipe: DatePipe){

}

ngOnInit(){
  this.getdta();
  this.getdtastate();
}
  columnsToDisplay = ['name', 'weight', 'symbol', 'position'];
    expandedElement:  null;
getdta(){
  this.http.get("https://api.covidindiatracker.com/state_data.json").subscribe(data=>{
    this.covid = data
  })
}

getdtastate(){
  this.http.get("https://api.covid19india.org/v4/data-all.json").subscribe((data:any)=>{
    this.covid_1 = data
    console.log("2")
    console.log(data[1])
        let datas = this.testdata
    }),
    (err=>{
      console.log(err)
  })
}

currentDate = new Date();
testdata = this.datePipe.transform(this.currentDate , 'yyyy-MM-dd')



}
