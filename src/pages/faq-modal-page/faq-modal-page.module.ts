import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FaqModalPage } from './faq-modal-page';

@NgModule({
  declarations: [
    FaqModalPage,
  ],
  imports: [
    IonicPageModule.forChild(FaqModalPage),
  ],
  exports: [
    FaqModalPage
  ]
})
export class FaqModalPageModule {}
