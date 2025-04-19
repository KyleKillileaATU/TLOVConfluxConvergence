import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonBackButton, IonButtons, IonButton } from '@ionic/angular/standalone';// extra'ed imports
import { RouterLink } from '@angular/router'; // internal routing
import { Router } from '@angular/router';
import { Geolocation } from '@capacitor/geolocation';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonBackButton, IonButtons, RouterLink,IonButton ]// extra'ed imports
})
export class HomePage {

  location:any = "";
  latitude:number=0;
  longitude:number=0;

  constructor(private router:Router) {

  }
  ngOnInit() {

  }
  async onButtonClick(){// async to have it on it's own thread 
    
    this.router.navigate(['/app/game']);

  }
  async getLocation(){
    console.log("Getting location");
    this.location = await Geolocation.getCurrentPosition();
    this.latitude = this.location.coords.latitude;
    this.longitude = this.location.coords.longitude;
    console.log(this.latitude," + ",this.longitude);
  }

}
