import { Component,  OnInit,VERSION } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DatePipe } from '@angular/common';
import { Routes } from '@angular/router';
@Component({
  selector: 'dte',
  templateUrl: './det.component.html'
})
export class DTEComponent implements OnInit  {
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
  this.getdta();
  this.getdtastate();
  this.getTotal();
}
  columnsToDisplay = ['name', 'weight', 'symbol', 'position'];
    expandedElement:  null;
getdta(){
  this.http.get("https://api.covidindiatracker.com/state_data.json").subscribe(data=>{
    this.covid = data
  })
}

getdtastate(){
  this.http.get("https://api.covid19india.org/state_district_wise.json").subscribe((data:any)=>{
    this.covid_1 = data
    
    }),
    (err=>{
      console.log(err)
  })
}

getTotal(){
  this.http.get("https://api.covidindiatracker.com/total.json").subscribe((data:any)=>{
    this.total_covid_1 = data
    
    }),
    (err=>{
      console.log(err)
  })
}
router(){

}

currentDate = new Date();
testdata = this.datePipe.transform(this.currentDate , 'yyyy-MM-dd')

}
