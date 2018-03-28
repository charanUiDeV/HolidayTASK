import { Component, OnInit } from '@angular/core';
import { HolidaysService } from '../holidays.service';
import{Router} from '@angular/router';
import {MatChipsModule} from '@angular/material/chips';
import {MatButtonModule} from '@angular/material/button';


@Component({
  selector: 'app-holidays',
  templateUrl: './holidays.component.html',
  styleUrls: ['./holidays.component.css'],
   providers:[HolidaysService]
})
export class HolidaysComponent implements OnInit {
  Users:any=[];
 
  constructor(private service:HolidaysService) { }

  ngOnInit() {
    this.service.getusers().subscribe(users => {

    for(let key in users){
      // console.log(key);
      this.Users.push(key);
    }

    });
    
    
  }

}
