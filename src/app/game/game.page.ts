import { Component,  OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { RouterLink } from '@angular/router'; // internal routing
import { Storage } from '@ionic/storage-angular';
import { Geolocation } from '@capacitor/geolocation';

//import * as fs from 'fs';
//import * as path from 'path';

//import { GoogleMap } from '@capacitor/google-maps'
//import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';


@Component({
  selector: 'app-game',
  templateUrl: './game.page.html',
  styleUrls: ['./game.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule,RouterLink],
  //schemas: [CUSTOM_ELEMENTS_SCHEMA] 
})

export class GamePage implements OnInit {
  //mapref:any;
  //@viewChild('map')mapref: ElementRef;
  //map!: GoogleMap;

  //private fs = require('fs');
  

  counter:number = 90;
  spawncount:number = 0;
  spawncounter:number = 0;
  location:any = "";
  latitude:number=0;
  longitude:number=0;
  captured:number=0;
  positionlati:number=0;
  positionlong:number=0;
  locationhtmlman:any="";
  positionrandom:number=0;
  position:string="";
  constructor(private storage:Storage) {} // callings

  async getLocation(){
    console.log("Getting location");
    this.location = await Geolocation.getCurrentPosition();
    this.latitude = this.location.coords.latitude;
    this.longitude = this.location.coords.longitude;
    //console.log(this.latitude," + ",this.longitude);
    this.location = this.latitude + ", " + this.longitude;
    return this.location  ;
  }
  async getLocationlati(){
    //console.log("Getting location");
    this.location = await Geolocation.getCurrentPosition();
    this.latitude = this.location.coords.latitude;
    //console.log(this.latitude," + ",this.longitude);
    return this.latitude;
  }
  async getLocationlong(){
    //console.log("Getting location");
    this.location = await Geolocation.getCurrentPosition();
    this.longitude = this.location.coords.longitude;
    //console.log(this.latitude," + ",this.longitude);
    return this.longitude;
  }
  
  ngOnInit() {
    this.getLocation();
    this.pinpointl();
    this.spawnTimer();
    this.creature1();
  }
  async ionViewWillEnter(){
    console.log("ionviewWillEnter");
    //await this.storage.create();
    //this.lati = await this.storage.get('latitude');
    }

  async pinpointl(){
    console.log(" pin ");

  }
  async creature1(){
    this.positionrandom =await this.getRand(2);
    if(this.positionrandom == 1){
      this.positionlati = (await this.getLocationlati())+((await this.getRand(10000.0)) / 10000 );
    } else if(this.positionrandom == 0){
      this.positionlati = (await this.getLocationlati())-((await this.getRand(10000.0)) / 10000 );
    }
    this.positionrandom =await this.getRand(2);
    if (this.positionrandom == 1) {
      this.positionlong = (await this.getLocationlong())+((await this.getRand(10000.0)) / 10000 );
    }else if (this.positionrandom == 0) {
      this.positionlong = (await this.getLocationlong())-(((await this.getRand(10000.0)) / 10000));
    }
    this.position = this.positionlati + ", " + this.positionlong;
    return this.position;
  }
  async getRand(randomn:number) {
    return Math.floor(Math.random() * randomn);
  }
  
  // Expected output: 0, 1 or 2
  
  async captureclicked(){
    
    console.log(" capturing... ");
    this.location = await this.getLocation();
    console.log(" capturing... "+ this.location);
    this.spawncounter = await this.spawnTimer();
    console.log(" capturing2... "+ this.spawncounter);
    
    console.log(" random position "+this.positionlati +", "+this.positionlong);
  }
  async spawnTimer() { // used to time spawns (( might duplicate ))
     {
  
        let intervalId = setInterval(() => {
            this.counter = this.counter - 1;
            //console.log("timer is: " + this.counter)
            if(this.counter == 1){ // when timer ends
              this.counter = 90;
              this.spawncount++;
              console.log("quantity spawned: " + this.spawncount)
              this.getLocation();
              
            } // end of
            if (this.spawncount >= 1 && this.spawncount < 5){
              console.log("Amount of creatures is: "+ this.spawncount)
            }
            if(this.counter === 0) clearInterval(intervalId)
            }, 1000)
        
    }
    return this.spawncount;
  }
    //showFile() {
    // read from file
    //  .fs.readFile('datafile.txt', function (data:string) {
          

    //      console.log("Reading: " + data.toString());
    //  });
    //}
    
 /*
  ionViewDidEnter(){
   
    //this.createMap(); // part of the broken google map
  }
  /*
  // the map misfortunately, is not avaliable to work
  async createMap(){
    this.map = await GoogleMap.create({
      id: 'the-map',
      apiKey: 'AIzaSyB8nMRt1fsDqSF1esD9gCXN3rV4M5emv1Y',
      config: {
        center: {
          lat: 50.6,
          lng: 20.1,
        },
        zoom: 7
      },
      element: this.mapref.nativeElement,
      forceCreate: true
    })
  }
     */
  
}
