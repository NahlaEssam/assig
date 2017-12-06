import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';

import { Department } from '../models/department-model';



@Injectable()
export class DepartmentServiceProvider {

	protected basePath = 'http://www.health-always.com/api/AdApi/';	
	constructor(private http: HttpClient) {
		
	}

	public getDepartments(): Observable<any> { 
        let path = this.basePath + 'GetDepartments/';
        return this.http.get<Array<any>>(path);
    }
}
