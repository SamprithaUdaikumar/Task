import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Category } from './category.model';

@Injectable({
    providedIn: 'root'
})
export class CategoriesService{
    
     mainCategory:Category[] = [
         new Category(1,'Venue','assets/venue.jpg'),
         new Category(2,'Decor','assets/decor.jpeg'),
         new Category(3,'Food & Catering','assets/food.jpg')
         
     ];

     venuesList:Category[] =[
        new Category(1,'Venue1','assets/venue1.jpg'),
        new Category(2,'Venue2','assets/venue2.jpg'),
        new Category(3,'Venue3','assets/venue3.jpg'),
        new Category(4,'Venue4','assets/venue4.jpg'),
        new Category(5,'Venue5','assets/venue5.jpg'),
        new Category(6,'Venue6','assets/venue6.jpg')
     ]

     vendorsList:Category[]= [
        new Category(1,'Photographers','assets/venue1.jpg'),
        new Category(2,'Makeup Artists','https://post.healthline.com/wp-content/uploads/2020/04/makeup_composition_overhead-732x549-thumbnail.jpg'),
        new Category(3,'Musicians','assets/music.jpg'),
        new Category(4,'Florists','assets/venue4.jpg'),
        new Category(5,'Cakes','assets/cakes.png'),
        new Category(6,'Catering','assets/venue6.jpg')
     ]

    getCategoriesList(){
        console.log(this.mainCategory);
        
        return this.mainCategory.slice(); 
        // will return a new array with all the elements since we don't give a start index value
    }

    getVenueList(){
        return this.venuesList.slice();
    }

    getVendorsList(){
        return this.vendorsList.slice();
    }
constructor(private http: HttpClient){

}

onGetData(){
    
}
 
}