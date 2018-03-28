import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import { HolidaysComponent } from './holidays/holidays.component';
import { HolidaysdetailsComponent } from './holidaysdetails/holidaysdetails.component';
import{RouterModule} from '@angular/router';
import { DashComponent } from './dash/dash.component';
import {MatCardModule} from '@angular/material/card';
import {MatChipsModule} from '@angular/material/chips';
import {routing} from './ap.routemodule'
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import 'hammerjs';
@NgModule({
  declarations: [
    AppComponent,
    HolidaysComponent,
    HolidaysdetailsComponent,
    DashComponent,
    
  ],
  imports: [
    BrowserModule,
    HttpModule,
   routing,
   BrowserAnimationsModule,
   MatButtonModule,
   MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    
    

    
  ],
 providers:[],
  bootstrap :[AppComponent]
})
export class AppModule { }
