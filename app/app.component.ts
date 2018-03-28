import { Component,OnInit } from '@angular/core';
import{HolidaysService} from './holidays.service';
import{RouterModule} from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers : [HolidaysService]
})
export class AppComponent implements OnInit {
 Users:any=[];
 constructor(private service:HolidaysService){

 }
 ngOnInit(){
   this.service.getusers().subscribe(users=>this.Users=users);
 }
}