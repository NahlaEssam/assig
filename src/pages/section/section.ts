import { Component } from '@angular/core';
import { NavController,LoadingController  } from 'ionic-angular';

import { DepartmentServiceProvider } from '../../providers/departments-service';
import { Department } from '../../models/department-model';


@Component({
  selector: 'section-page',
  templateUrl: 'section.html'
})
export class SectionPage {
  public title = 'صرفها';
  public buttonText = '(تغيير المدينة الحالية (جده';
  public searchText:string = "";
  private departments : Department[] = [];
  public displayedDepartments : Department [] = [];
  
  constructor(public navCtrl: NavController , private departmentService: DepartmentServiceProvider 
  , private loadingCtrl: LoadingController   ) {

  }
  ngOnInit(){

    let loader = this.loadingCtrl.create({
      content: "Please wait...",
    });
    loader.present();

    this.departmentService.getDepartments().subscribe(res=>{
       let result = JSON.parse(res);
       this.departments= result;
       this.displayedDepartments = result;
       loader.dismiss();
       console.log(res);
    }, error=>{
      loader.dismiss();
    })
  }
  public getItems(data){
      console.log(this.searchText);
  }
  
}
