import { NgModule } from '@angular/core';
import { Route,Routes, RouterModule } from '@angular/router';
import{ModuleWithProviders} from '@angular/core';
import { HolidaysComponent } from './holidays/holidays.component';
import {HolidaysdetailsComponent } from './holidaysdetails/holidaysdetails.component';
import { DashComponent } from './dash/dash.component';
import{AppComponent} from './app.component';


export const routes:Routes = [
     {
        path:'',
        redirectTo:'/holiday',
        pathMatch:'full'
    },
    { path:'holiday',
    component:DashComponent,
    children:[
        {
            path:'',
            component:HolidaysComponent
        },
        {
            path:':key',
            component: HolidaysdetailsComponent
        },
    ]
}

]

export const routing:ModuleWithProviders = RouterModule.forRoot(routes);