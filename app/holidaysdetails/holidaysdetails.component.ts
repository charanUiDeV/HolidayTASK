import { Component, OnInit } from '@angular/core';
import{HolidaysService} from '../holidays.service';
import{ActivatedRoute} from '@angular/router';
import {MatCardModule} from '@angular/material/card';


@Component({
  selector: 'app-holidaysdetails',
  templateUrl: './holidaysdetails.component.html',
  styleUrls: ['./holidaysdetails.component.css'],
providers :[HolidaysService]
})
export class HolidaysdetailsComponent implements OnInit {

Users:any=[];
users:any=[];


month:any;
day:any;
name:string;

constructor(private service:HolidaysService,private route:ActivatedRoute){

}
ngOnInit(){
  
  let date = this.route.snapshot.params['key'];

  this.Users=date.split("");
  this.month=this.Users[5]+this.Users[6];
  this.day=this.Users[8]+this.Users[9];

this.service.getvalues(this.month,this.day).subscribe(res=>this.Users=res);

}
}