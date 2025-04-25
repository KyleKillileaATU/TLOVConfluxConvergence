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
  
  // universal variables
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
  positionrandom:number=0;spawntype:number=0;
  position:string="";position1:string="";position2:string="";position3:string="";position4:string="";position5:string="";
  spawned1:number=0;spawned2:number=0;spawned3:number=0;spawned4:number=0;spawned5:number=0;spawnconfirm:number=0;
  

  constructor(private storage:Storage) {} // callings
  
  // main code
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
    
  }
  async ionViewWillEnter(){
    console.log("ionviewWillEnter");
    //await this.storage.create();
    //this.lati = await this.storage.get('latitude');
    }

  async pinpointl(){
    console.log(" pin ");
  // spawn c
  }
  async creature1(){
    this.position1 = await this.creaturecreate();
  }
  async creature2(){
    this.position2 = await this.creaturecreate();
  }
  async creature3(){
    this.position3 = await this.creaturecreate();
  }
  async creature4(){
    this.position4 = await this.creaturecreate();
  }
  async creature5(){
    this.position5 = await this.creaturecreate();
  }
  // cap c
  async creature1cap(){
    this.creature1des();
  }
  async creature2cap(){
    this.creature2des();
  }
  async creature3cap(){
    this.creature3des();
  }
  async creature4cap(){
    this.creature4des();
  }
  async creature5cap(){
    this.creature5des();
  }
  // remove c
  async creature1des(){
    this.position1 = "";
    this.spawned1 = 0;
    console.log("Despawned 1");
  }
  async creature2des(){
    this.position2 = "";
    this.spawned2 = 0;
    console.log("Despawned 2");
  }
  async creature3des(){
    this.position3 = "";
    this.spawned3 = 0;
    console.log("Despawned 3");
  }
  async creature4des(){
    this.position4 = "";
    this.spawned4 = 0;
    console.log("Despawned 4");
  }
  async creature5des(){
    this.position5 = "";
    this.spawned5 = 0;
    console.log("Despawned 5");
  }
  async creaturealldes(){  // despawntimer clear
    this.position1 = "";
    this.position2 = "";
    this.position3 = "";
    this.position4 = "";
    this.position5 = "";
    console.log("Despawned all")
  }
  // c c
  async creaturecreate(){
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
    console.log(" capturing1... "+ this.location);
    this.spawntype = await this.spawnTimer();
    console.log(" capturing2... "+ this.spawncounter);
    console.log(" rnd position "+this.positionlati +", "+this.positionlong);

    if (this.spawntype != 0) {
      switch (this.spawntype){ // capturing
        case 1: {

          this.creature1cap();
          break;
        }
        case 2: {

          this.creature2cap();
          break;
        }
        case 3: {

          this.creature3cap();
          break;
        }
        case 4: {

          this.creature4cap();
          break;
        }
        case 5: {

          this.creature5cap();
          break;
        }

      }// end switch
      this.spawntype = 0;
    }// end if
  }
  async spawnTimer() { // used to time spawns (( might duplicate ))
     {
  
        let intervalId = setInterval(async () => {
            this.counter = this.counter - 1;
            //console.log("spa timer is: " + this.counter)
            if(this.counter == 1){ // when timer ends
              this.counter = 90;
              this.spawncount++;
              if(this.spawncount >= 6){
                this.spawncount = 5;
              }
              console.log("quantity spawned: " + this.spawncount)
              this.getLocation();
              let randcreature:number = (await this.getRand(501.0)) // rng spawn
              let loop= 15;
              
                while (loop < 25) { // filtering loop
                  if (randcreature <= 100 && randcreature >=0) {  
                    if (this.spawned1 !=1){
                      this.creature1();
                      
                      this.spawntype = 1;
                      this.spawned1 =1;
                      this.spawnconfirm= 1;
                      console.log("c spawned: " + randcreature + ", type: "+ this.spawntype)
                      loop= 30;
                    } else {
                      console.log("re-cyling...")
                    }
                  } else if (randcreature <= 200 && randcreature >=101) {
                    if (this.spawned2 !=1){
                      this.creature2();
                      
                      this.spawntype = 2;
                      this.spawned2 = 1;
                      this.spawnconfirm= 1;
                      console.log("c spawned: " + randcreature + ", type: "+ this.spawntype)
                      loop= 30;
                    } else {
                      console.log("re-cyling...")
                    }
                  } else if (randcreature <= 300 && randcreature >=201) {
                    if (this.spawned3 !=1){
                      this.creature3();
                      
                      this.spawntype = 3;
                      this.spawned3=1;
                      this.spawnconfirm= 1;
                      console.log("c spawned: " + randcreature + ", type: "+ this.spawntype)
                      loop= 30;
                    } else {
                      console.log("re-cyling...")
                    }
                  } else if (randcreature <= 400 && randcreature >=301) {
                    if (this.spawned4 !=1){
                      this.creature4();
                      
                      this.spawntype = 4;
                      this.spawned4 = 1;
                      this.spawnconfirm= 1;
                      console.log("c spawned: " + randcreature + ", type: "+ this.spawntype)
                      loop= 30;
                    } else {
                      console.log("re-cyling...")
                    }
                  } else if (randcreature <= 500 && randcreature >=401) {
                    if (this.spawned5 !=1){
                      this.creature5();
                      
                      this.spawntype = 5;
                      this.spawned5 = 1;
                      this.spawnconfirm= 1;
                      console.log("c spawned: " + randcreature + ", type: "+ this.spawntype)
                      loop= 30;
                    } else {
                      console.log("re-cyling...")
                    }
                  }

                  if(this.spawnconfirm == 0 ){
                    randcreature = (await this.getRand(501.0)) // re-rng spawn
                    console.log("re-rng'ing...")
                  }
                  
                }// loop
                this.spawnconfirm= 0;
                this.despawnTimer();
                console.log("spawn confirmed: "+this.spawntype)
            } // end of
            if (this.spawncount >= 1 && this.spawncount < 5){
              //console.log("Amount of creatures is: "+ this.spawncount)
            }
            if(this.counter === 0) clearInterval(intervalId)
            }, 1000)
        
    }
    
    return this.spawntype;
  }
  async despawnTimer() { // used to time de-spawns (( might duplicate ))
    {
       let counter2 = 47;
       let intervalId2 = setInterval(() => {
           counter2 = counter2 - 1;
           console.log("des timer is: " + counter2)
           if(counter2 == 0){ // when timer ends
             //counter2 = 47;
             this.spawncount--;
             console.log("despawning creature: " + this.spawntype)
             this.creaturealldes();
             
           } // end of
           if (this.spawncount >= 1 && this.spawncount < 5){
             console.log("Amount of creatures is: "+ this.spawncount)
           }
           if(this.counter === 0) clearInterval(intervalId2)
           }, 1000)
       
   }
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
