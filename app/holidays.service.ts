import { Injectable } from '@angular/core';

import "rxjs/add/operator/map";
import   {Http,Response} from '@angular/http';

@Injectable()
export class HolidaysService {
  url:string="https://holidayapi.com/v1/holidays?key=09598846-b184-44bf-bf24-1f5b279a2f7a&country=US&year=2017"
  Users:any=[];
  constructor(private _http :Http) { 

  }
getusers(){
  return this._http.get(this.url).map(res=>res.json().holidays);

}
getvalues(month, day){

  return this._http.get("https://holidayapi.com/v1/holidays?key=09598846-b184-44bf-bf24-1f5b279a2f7a&country=US&year=2017&month="+month+"&day="+day)
  .map(res=>res.json().holidays);

}
}
