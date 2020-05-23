import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the TabsServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class TabsServiceProvider {

    constructor(public http: HttpClient) {
        console.log('Hello TabsServiceProvider Provider');
    }

}
