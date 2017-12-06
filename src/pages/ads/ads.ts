import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'ads-page',
  templateUrl: 'ads.html'
})
export class adsPage {
  public title = 'اعلاناتى';
  constructor(public navCtrl: NavController) {

  }

}
