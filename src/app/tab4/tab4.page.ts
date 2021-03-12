import { Component, OnInit } from '@angular/core';
import { CategoriesService } from '../services/categories.service';
import { Category } from '../services/category.model';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit {

  vendors: Category[];
  constructor(private categoryService: CategoriesService) { }

  ngOnInit() {
    this.vendors = this.categoryService.getVendorsList();
  }

  onClick(vendor:Category){
    console.log(vendor);
    
  }

}
