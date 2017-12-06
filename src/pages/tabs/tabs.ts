import { Component } from '@angular/core';

import { SectionPage } from '../section/section';
import { adsPage } from '../ads/ads';
import { messagePage } from '../message/message';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  sectionsRoot = SectionPage;
  messageRoot = messagePage;
  advRoot = adsPage;
 
  tab2= 'الاقسام';
  tab3= 'اعلاناتى';
  tab1= 'الرسائل';
 
  constructor() {

  }
}
