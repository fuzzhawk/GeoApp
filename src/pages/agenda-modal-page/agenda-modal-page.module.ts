import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AgendaModalPage } from './agenda-modal-page';

@NgModule({
  declarations: [
    AgendaModalPage,
  ],
  imports: [
    IonicPageModule.forChild(AgendaModalPage),
  ],
  exports: [
    AgendaModalPage
  ]
})
export class AgendaModalPageModule {}
