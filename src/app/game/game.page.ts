import { Component,  OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { RouterLink } from '@angular/router'; // internal routing
import { Storage } from '@ionic/storage-angular';
import { Geolocation } from '@capacitor/geolocation';
import { ElementRef, ViewChildren } from '@angular/core';
import { IonButton, IonCard, IonCardContent } from '@ionic/angular/standalone';
import type { QueryList } from '@angular/core';
import type { Animation } from '@ionic/angular/standalone';
import { AnimationController } from '@ionic/angular/standalone';
//import { createAnimation } from 'https://cdn.jsdelivr.net/npm/@ionic/core@latest/dist/esm/index.mjs';

//import * as fs from 'fs';
//import * as path from 'path';

//import { GoogleMap } from '@capacitor/google-maps'
//import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';


@Component({
  selector: 'app-game',
  templateUrl: './game.page.html',
  styleUrls: ['./game.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule,RouterLink,IonButton, IonCard, IonCardContent],
  //schemas: [CUSTOM_ELEMENTS_SCHEMA] 
})

export class GamePage implements OnInit {

  @ViewChildren(IonCard, { read: ElementRef }) cardElements!: QueryList<ElementRef<HTMLIonCardElement>>;

  private animation!: Animation;
  
  //mapref:any;
  //@viewChild('map')mapref: ElementRef;
  //map!: GoogleMap;

  //private fs = require('fs');
  
  // universal variables
  counter:number = 90;counter2:number = 46;
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
  intervalId:any;

  
  constructor(private storage:Storage,private animationCtrl: AnimationController) {} // callings
  
  private cardA!: Animation | null;
  private cardB!: Animation | null;
  private cardC!: Animation | null;
  private cardD!: Animation | null;
  private cardE!: Animation | null;
  private cardA1!: Animation | null;
  private cardB1!: Animation | null;
  private cardC1!: Animation | null;
  private cardD1!: Animation | null;
  private cardE1!: Animation | null;

  // main code
  
  ngAfterViewInit() {
    const cardElA = this.cardElements.get(0);
    const cardElB = this.cardElements.get(1);
    const cardElC = this.cardElements.get(2);
    const cardElD = this.cardElements.get(3);
    const cardElE = this.cardElements.get(4);
    const cardElA1 = this.cardElements.get(0);
    const cardElB1 = this.cardElements.get(1);
    const cardElC1 = this.cardElements.get(2);
    const cardElD1 = this.cardElements.get(3);
    const cardElE1 = this.cardElements.get(4);

    // start
    this.cardA1 = cardElA1
    ? this.animationCtrl
        .create()
        .addElement(cardElA1.nativeElement)
        .fill('none')
        .duration(250)
        .keyframes([
        { offset: 0, transform: 'scale(1)', opacity: '1' },
        { offset: 1, transform: 'scale(0.25)', opacity: '0' },
      ]): null;

      // split 
      this.cardB1 = cardElB1
      ? this.animationCtrl
          .create()
          .addElement(cardElB1.nativeElement)
          .fill('none')
          .duration(250)
        .keyframes([
        { offset: 0, transform: 'scale(1)', opacity: '1' },
        { offset: 1, transform: 'scale(0.25)', opacity: '0' },
        
      ]): null;
      
      // split 
      this.cardC1 = cardElC1
      ? this.animationCtrl
          .create()
          .addElement(cardElC1.nativeElement)
          .fill('none')
          .duration(250)
          
        .keyframes([
        { offset: 0, transform: 'scale(1)', opacity: '1' },
        { offset: 1, transform: 'scale(0.25)', opacity: '0' },
      ]): null;
      // split 
      this.cardD1 = cardElD1
    ? this.animationCtrl
        .create()
        .addElement(cardElD1.nativeElement)
        .fill('none')
        .duration(250)
        .keyframes([
        { offset: 0, transform: 'scale(1)', opacity: '1' },
        { offset: 1, transform: 'scale(0.25)', opacity: '0' },
      ]): null;
      // split 
      this.cardE1 = cardElE1
    ? this.animationCtrl
        .create()
        .addElement(cardElE1.nativeElement)
        .fill('none')
        .duration(250)
        .keyframes([
        { offset: 0, transform: 'scale(1)', opacity: '1' },
        { offset: 1, transform: 'scale(0.25)', opacity: '0' },
      ]): null;

      //this.setupan();
    //active
    this.cardA = cardElA
    ? this.animationCtrl
        .create()
        .addElement(cardElA.nativeElement)
        .fill('none')
        .duration(4200)
        .keyframes([
        { offset: 0, transform: 'scale(0.25)', opacity: '0', left: '-270%'  },
        { offset: 0.25, transform: 'scale(1)', opacity: '1', left: '-270%'  },
        { offset: 0.7, transform: 'scale(3)', opacity: '0.3', left: '-270%'  },
        { offset: 1, transform: 'scale(2)', opacity: '0', left: '-270%'  },
      ]): null;

      // split 
      this.cardB = cardElB
      ? this.animationCtrl
          .create()
          .addElement(cardElB.nativeElement)
          .fill('none')
          .duration(4200)
          .keyframes([
            { offset: 0, transform: 'scale(0.25)', opacity: '0', left: '-270%'  },
            { offset: 0.25, transform: 'scale(1)', opacity: '1', left: '-270%'  },
            { offset: 0.7, transform: 'scale(3)', opacity: '0.3', left: '-270%'  },
            { offset: 1, transform: 'scale(2)', opacity: '0', left: '-270%'  },
        ]): null;
      // split 
      this.cardC = cardElC
      ? this.animationCtrl
          .create()
          .addElement(cardElC.nativeElement)
          .fill('none')
          .duration(4200)
          .keyframes([
            { offset: 0, transform: 'scale(0.25)', opacity: '0', left: '-270%'  },
            { offset: 0.25, transform: 'scale(1)', opacity: '1', left: '-270%'  },
            { offset: 0.7, transform: 'scale(3)', opacity: '0.3', left: '-270%'  },
            { offset: 1, transform: 'scale(2)', opacity: '0', left: '-270%'  },
        ]): null;
      // split 
      this.cardD = cardElD
    ? this.animationCtrl
        .create()
        .addElement(cardElD.nativeElement)
        .fill('none')
        .duration(4200)
        .keyframes([
          { offset: 0, transform: 'scale(0.25)', opacity: '0', left: '-270%'  },
          { offset: 0.25, transform: 'scale(1)', opacity: '1', left: '-270%'  },
          { offset: 0.7, transform: 'scale(3)', opacity: '0.3', left: '-270%'  },
          { offset: 1, transform: 'scale(2)', opacity: '0', left: '-270%'  },
      ]): null;
      // split 
      this.cardE = cardElE
    ? this.animationCtrl
        .create()
        .addElement(cardElE.nativeElement)
        .fill('none')
        .duration(4200)
        .keyframes([
          { offset: 0, transform: 'scale(0.25)', opacity: '0', left: '-270%'  },
          { offset: 0.25, transform: 'scale(1)', opacity: '1', left: '-270%'  },
          { offset: 0.7, transform: 'scale(3)', opacity: '0.3', left: '-270%'  },
          { offset: 1, transform: 'scale(2)', opacity: '0', left: '-270%'  },
      ]): null;
      
      this.testanall();
    }// end of
    
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
    
    this.spawnTimer();
    
  }
  async ionViewWillEnter(){
    console.log("ionviewWillEnter");
    //await this.storage.create();
    //this.lati = await this.storage.get('latitude');
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
  async testanall(){
    await this.cardA?.play();
    await this.cardB?.play();
    await this.cardC?.play();
    await this.cardD?.play();
    await this.cardE?.play();
  }
  async setupan(){
    await this.cardA1?.play();
    console.log(" 1 ");
    await this.cardB1?.play();
    console.log(" 2 ");
    await this.cardC1?.play();
    console.log(" 3 ");
    await this.cardD1?.play();
    console.log(" 4 ");
    await this.cardE1?.play();
    console.log(" completed ");
  }
  async creature1cap(){
    this.creature1des();
    await this.cardA?.play();

  }
  async creature2cap(){
    this.creature2des();
    await this.cardB?.play();
  }
  async creature3cap(){
    this.creature3des();
    await this.cardC?.play();
  }
  async creature4cap(){
    this.creature4des();
    await this.cardD?.play();
  }
  async creature5cap(){
    this.creature5des();
    await this.cardE?.play();
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
    this.spawned1 = 0;
    this.position2 = "";
    this.spawned2 = 0;
    this.position3 = "";
    this.spawned3 = 0;
    this.position4 = "";
    this.spawned4 = 0;
    this.position5 = "";
    this.spawned5 = 0;
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
    clearInterval(this.intervalId);
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
  
        this.intervalId = setInterval(async () => {
            this.counter = this.counter - 1;
            console.log("spa timer is: " + this.counter)
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
            if(this.counter === 0) clearInterval(this.intervalId)
            }, 1000)
        
    }
    
    return this.spawntype;
  }
  async despawnTimer() { // used to time de-spawns (( might duplicate ))
    {
       
       let intervalId2 = setInterval(() => {
        this.counter2 = this.counter2 - 1;
           console.log("des timer is: " + this.counter2)
           if(this.counter2 == 0){ // when timer ends
             
             this.spawncount--;
             console.log("despawning creature: " + this.spawntype)
             this.creaturealldes();
             
           } // end of
           if (this.spawncount >= 1 && this.spawncount < 5){
             console.log("Amount of creatures is: "+ this.spawncount)
           }
           if(this.counter2 === 0) clearInterval(intervalId2)
           }, 1000)
           this.counter2 = 47;
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
