import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor(private http:HttpClient, public toastController: ToastController ) {}
  profileUpdate(form:NgForm) {
    console.log(form);
    this.http.post('https://events-ccb45-default-rtdb.firebaseio.com/profile.json',form.value).subscribe(responseDate=>{
    this.presentToast();
    });
    
   }

   async presentToast() {
    const toast = await this.toastController.create({
      message: 'Your settings have been saved.',
      duration: 1000
    });
    toast.present();
  }
}
