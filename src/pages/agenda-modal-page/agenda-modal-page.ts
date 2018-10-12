import { Component } from '@angular/core';
import { IonicPage, NavParams, ViewController } from 'ionic-angular';
import { LocalNotifications } from '@ionic-native/local-notifications';

/**
 * Generated class for the ModalPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-agenda-modal-page',
  templateUrl: 'agenda-modal-page.html',
})
export class AgendaModalPage {

  constructor(private navParams: NavParams, private view: ViewController, private localNotifications: LocalNotifications) {
  }
  
  itemdata = this.navParams.get('data');
  places = this.navParams.get('places');
  
 note() {
  this.localNotifications.schedule({
  id: 1,
  text: 'wubba lubba dub dub!',

});

 }
  
   
   

  ionViewWillLoad() {
    const data = this.navParams.get('data');
    console.log(data);
  }

  closeModal() {
    const data = {
      name: 'John Doe',
      occupation: 'Milkman'
    };
    this.view.dismiss(data);
  }
}
