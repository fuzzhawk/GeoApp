import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PosterModalPage } from './poster-modal-page';

@NgModule({
  declarations: [
    PosterModalPage,
  ],
  imports: [
    IonicPageModule.forChild(PosterModalPage),
  ],
  exports: [
    PosterModalPage
  ]
})
export class PosterModalPageModule {}
