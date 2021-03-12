import { Component, OnInit } from '@angular/core';
import { Category } from '../services/category.model';
import {  CategoriesService } from '../services/categories.service';
import { LocationService } from '../services/location.service';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
  categories : Category[];
  venueList : Category[]; 
  constructor(private categoriesService: CategoriesService, public locationService: LocationService) {

  }
  
  async ngOnInit(){

    this.categories = this.categoriesService.getCategoriesList();
    console.log(this.categories);
    this.locationService.getGeolocation();
    this.venueList = this.categoriesService.getVenueList();
  }

  slideOpts = {
    initialSlide: 1,
    speed: 400
  };

 async getlocation(){
   this.locationService.getGeolocation();

  }

  doRefresh(event){
    console.log('Refresh Clicked');
    
  }
  testClick(){
    console.log('Item clicked!');
    
  }

}
