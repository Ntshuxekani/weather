import { WeatherProvider } from './../../providers/weather/weather';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import 'rxjs/add/operator/map';

@Component({
 selector: 'page-home',
 templateUrl: 'home.html'
})
export class HomePage {
 weather:any;
 city: string;
 value: string;
 humidity: string;
 wspeed: string;
 main: string;
 description: string;
 wind: string;
 Temp: number;
 date: number;
 


 constructor(public navCtrl: NavController, private weatherProvider: WeatherProvider) {

 }


 getWeather(cvalue:any){
   this.weatherProvider.getWeather(this.city).subscribe(results=>{
     this.weather=results;
     this.main=this.weather.weather[0].main;
     this.humidity=this.weather.main.humidity;
     this.Temp=this.weather.main.temp;
     this.date=this.weather.dt;
     this.wind=this.weather.wind.speed;
     this.description=this.weather.weather[0].description;
    
     
         console.log("response",results);
   });

 }
}

  
   

    
