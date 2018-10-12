import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListModalPage } from './list-modal-page';

@NgModule({
  declarations: [
    ListModalPage,
  ],
  imports: [
    IonicPageModule.forChild(ListModalPage),
  ],
  exports: [
    ListModalPage
  ]
})
export class ListModalPageModule {}
