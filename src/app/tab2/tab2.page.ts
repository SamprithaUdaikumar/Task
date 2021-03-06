import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';
import { Photo, PhotoService } from '../services/photo.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit{

  constructor(private photoService: PhotoService, private actionsheet: ActionSheetController) {}

  addPhotoToGallery(){
    this.photoService.addNewToGallery();
  }

  async ngOnInit() {
    await this.photoService.loadSaved();
  }

  public async showActionSheet(photo:Photo, position:number){
    const actionSheet = await this.actionsheet.create({
      header:'Photos',
      buttons:[{
        text:'Delete',
        role:'destructive',
        icon:'trash',
        handler: () =>{
          this.photoService.deletePicture(photo, position);
        }
      },{
        text:'Cancel',
        icon:'close',
        role:'cancel'
      }
    ]
    });
    await actionSheet.present()
  }

  

}
