import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import {AuthProvider} from "../auth/auth";



/*
  Generated class for the UserServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UserServiceProvider {

  BASE_URI = "https://bsuproductapp.herokuapp.com";

  constructor(public http: Http,public authService:AuthProvider) {
  }

  addAccountInfo(user){

    return new Promise(((resolve, reject) => {

      let headers = new Headers();
      headers.append('Content-Type', 'application/json');
      headers.append('Authorization', this.authService.token);



      this.http.post(this.BASE_URI + '/api/account/update',JSON.stringify(user),{headers:headers}).map(res => res.json())
        .subscribe(res =>{
          resolve(res)
        },(err) =>
        {
          reject(err);
        })


    }));

  }

}
