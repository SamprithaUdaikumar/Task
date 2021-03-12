import { Injectable } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { NativeGeocoder, NativeGeocoderResult, NativeGeocoderOptions } from '@ionic-native/native-geocoder/ngx';

@Injectable({
  providedIn: 'root'
})
export class LocationService {
  
  latitude:any = 0;
  longitude:any = 0;
  address: string;
  constructor(public geolocation: Geolocation, private nativeGeocoder: NativeGeocoder) { }

  async getGeolocation(){
    await this.geolocation.getCurrentPosition().then((resp)=>{
      this.latitude= resp.coords.latitude;
      this.longitude= resp.coords.longitude;
      console.log(resp);
      
       this.getAddress(this.latitude,this.longitude);
    }).catch((error)=>{
      console.log(error);
      return error ;
    })
  
  }
   // geocoder options
   nativeGeocoderOptions: NativeGeocoderOptions = {
    useLocale: true,
    maxResults: 5
  };

  // get address using coordinates
  getAddress(lat,long){
    this.nativeGeocoder.reverseGeocode(lat, long, this.nativeGeocoderOptions)
    .then((res: NativeGeocoderResult[]) => {
      console.log(res[0]);
       return this.address = res[0].locality;
    })
    .catch((error: any) => {
      console.log('Error getting location'+ JSON.stringify(error));
    });
  }

  // pretifyAddress(address){
  //   let obj=[];
  //   let data = "";
  //   for (let key in address) {
  //     obj.push(address[key]);
  //   }
  //   console.log(obj);
  //   obj.reverse();
  //   for (let val in obj) {
  //     if(obj[val].length)
  //     data += obj[val]+', ';
  //   }
  //   console.log(data);
  //   return address.slice(0, -2);
  // }


}
