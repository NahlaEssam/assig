import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'message-page',
  templateUrl: 'message.html'
})
export class messagePage {
  public title = 'الرسائل';
  constructor(public navCtrl: NavController) {

  }

}
