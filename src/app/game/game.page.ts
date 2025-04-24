import { Component,  OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { RouterLink } from '@angular/router'; // internal routing
import { Storage } from '@ionic/storage-angular';
import { Geolocation } from '@capacitor/geolocation';
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
  
  locationbase:any = "";
  latitudebase:number=0;
  longitudebase:number=0;

  location:any = "";
  lati:number=0;
  longi:number=0;
  locationhtmlman:any="";
  constructor(private storage:Storage) {}

  async getLocation(){
    console.log("Getting location");
    this.locationbase = await Geolocation.getCurrentPosition();
    this.latitudebase = this.location.coords.latitude;
    this.longitudebase = this.location.coords.longitude;
    console.log(this.latitudebase," + ",this.longitudebase);
  }

  ngOnInit() {
    this.getLocation();
  }
  async ionViewWillEnter(){
    console.log("ionviewWillEnter");
    await this.storage.create();
    this.lati = await this.storage.get('latitude');
    }
    

  ionViewDidEnter(){
    
  //https://d-maps.com/m/europa/irland/galway/galway53.gif 

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
