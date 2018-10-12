import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { KeynoteModalPage } from './keynote-modal-page';

@NgModule({
  declarations: [
    KeynoteModalPage,
  ],
  imports: [
    IonicPageModule.forChild(KeynoteModalPage),
  ],
  exports: [
    KeynoteModalPage
  ]
})
export class KeynoteModalPageModule {}
